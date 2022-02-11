const express = require("express");
const con = require("./database");
const jwt = require("jsonwebtoken");
var router = express.Router();

router.post("/request", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.rno;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let curr = new Date();

  let query = "INSERT INTO bonafide (rno,batch_id,type,reason,status,request,issue,comment) values('" + req.body.rno + "','" + req.body.batch_id + "','" + req.body.bonafide_type + "','" + req.body.bonafide_reason + "','NNN'" + ",STR_TO_DATE('" + "" + curr.getDate() + "/" + curr.getMonth() + 1 + "/" + curr.getFullYear() + "','%d/%m/%Y'),NULL,'" + req.body.comment + "');";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log("Record inserted into bonafide table");
    res.json({ "Record": "Inserted" });
  });
});
router.post("/responses", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.rno;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM bonafide WHERE rno='" + req.userData + "' ORDER BY request DESC;";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
      res.json(result);
    }
  })
});
router.get("/pending", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.staff_id;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM dept WHERE hod='" + req.userData + "';";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result.length == 1) {
      let query = "SELECT student.stud_name,pending.* FROM (SELECT * FROM bonafide WHERE rno IN (SELECT rno FROM student WHERE dept_id=(SELECT dept_id from dept WHERE hod='" + req.userData + "'AND status!='YYY') ORDER BY request DESC)) as pending join student on pending.rno=student.rno;";
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
          let data = {result:result,designation:'hod'}
          res.json(data);
        } else {
          res.status(401).json({ message: "Invalid User" });
        }
      });
    }
    else if (result.length == 0) {
      let query = "SELECT student.stud_name,pending.* FROM (SELECT * FROM bonafide WHERE rno IN (SELECT rno FROM student WHERE batch_id=(SELECT batch_id FROM batch WHERE tutor_id='" + req.userData + "' AND status!='YYY') ORDER BY request DESC)) as pending join student on pending.rno=student.rno;";
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        let data = {result:result,designation:'tutor'};
          res.json(data);
      })
    }
    else {
      res.status(401).json({ message: "Invalid User" });
    }
  });
});
router.post("/accept", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.staff_id;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "UPDATE bonafide SET status='"+req.body.status+"' WHERE bonafide_id="+req.body.bonafideId+"";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json({"message":"Updated the bonafide"});
  });
});

router.get("/history", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.staff_id;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM dept WHERE hod='" + req.userData + "';";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result.length == 1) {
      let query = "SELECT student.stud_name,history.* FROM  (SELECT * FROM bonafide WHERE rno IN (SELECT rno FROM student WHERE dept_id=(SELECT dept_id from dept WHERE hod='" + req.userData + "') ORDER BY request DESC))as history join student on history.rno=student.rno;";
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
          let data = {result:result,designation:'hod'}
          res.json(data);
        } else {
          res.status(401).json({ message: "Invalid User" });
        }
      });
    }
    else if (result.length == 0) {
      let query = "SELECT student.stud_name,history.* FROM  (SELECT * FROM bonafide WHERE rno IN (SELECT rno FROM student WHERE batch_id=(SELECT batch_id FROM batch WHERE tutor_id='" + req.userData + "') ORDER BY request DESC))as history join student on history.rno=student.rno;";
      con.query(query, function (err, result, fields) {
        if (err) throw err;
        let data = {result:result,designation:'tutor'}
        res.json(data);
      })
    }
    else {
      res.status(401).json({ message: "Invalid User" });
    }
  });
});
module.exports = router;
