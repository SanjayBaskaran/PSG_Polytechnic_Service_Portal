const express = require("express");
const con = require("./database");
const jwt = require("jsonwebtoken");
var router = express.Router();
const bcrypt = require("bcrypt");

router.post("/student", (req, res) => {
  let query =
    "SELECT * FROM student WHERE rno='" +
    req.body.rno +
    "' and stud_pass='" +
    req.body.password +
    "';";
    console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
      let token = jwt.sign(
        { rno: result[0].rno, stud_name: result[0].stud_name },
        "SECRET_CODE_USER_LOGIN",
        { expiresIn: "1h" }
      );
      res.json({ data: result[0], token: token });
    } else {
      res.status(401).json({ message: "Invalid User" });
    }
  });
});

router.get(
  "/authCheck/student",
  (req, res, next) => {
    try {
      let token = req.headers.authentication;
      var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
      req.userData = data.rno;
      next();
    } catch (error) {
      console.log("Error");
      res.status(401).json({ Auth: false });
    }
  },
  (req, res) => {
    let query = "SELECT * FROM student WHERE rno='" + req.userData + "';";
    con.query(query, function (err, result, fields) {
      if (err){
        res.status(401).json({ message: "Invalid User" });
        return;
      }
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(401).json({ message: "Invalid User" });
      }
    });
  }
);

router.post("/teacher", (req, res) => {
  let query =
    "SELECT * FROM staff WHERE staff_id='" +
    req.body.staff_id +
    "' and password='" +
    req.body.password +
    "';";
    console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
      let token = jwt.sign(
        { staff_id: result[0].staff_id, staff_name: result[0].staff_name },
        "SECRET_CODE_USER_LOGIN",
        { expiresIn: "1h" }
      );
      res.json({ data: result[0], token: token });
    } else {
      res.status(401).json({ message: "Invalid User" });
    }
  });
});

router.get(
  "/authCheck/teacher",
  (req, res, next) => {
    try {
      let token = req.headers.authentication;
      var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
      req.userData = data.staff_id;
      next();
    } catch (error) {
      console.log("Error");
      res.status(401).json({ Auth: false });
    }
  },
  (req, res) => {
    let query = "SELECT * FROM staff WHERE staff_id='" + req.userData + "';";
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(401).json({ message: "Invalid User" });
      }
    });
  }
);

router.post("/admin", (req, res) => {
  let query = "SELECT * FROM admin WHERE username='" + req.body.username + "';";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0) {
      bcrypt.compare(
        req.body.password,
        result[0].password,
        function (err, resultx) {
          if(err){
            throw err;
          }
          let token = jwt.sign(
              { username: result[0].username},
              "SECRET_CODE_USER_LOGIN",
            );
            res.json({ data: result[0], token: token });
        }
      );
    } else {
      res.status(401).json({ message: "Invalid User" });
    }
  });
});
router.get(
  "/authCheck/admin",
  (req, res, next) => {
    try {
      let token = req.headers.authentication;
      var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
      req.userData = data.username;
      next();
    } catch (error) {
      console.log("Error");
      res.status(401).json({ Auth: false });
    }
  },
  (req, res) => {
    let query = "SELECT * FROM admin WHERE username='" + req.userData + "';";
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(401).json({ message: "Invalid User" });
      }
    });
  }
);

module.exports = router;
