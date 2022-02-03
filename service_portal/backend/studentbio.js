const express = require("express");
const con = require("./database");
const jwt = require("jsonwebtoken");
var router = express.Router();

router.get(
  "/",
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
  (req, res, next) => {
    req.userData;
    let query = "SELECT * FROM dept WHERE hod='" + req.userData + "';";
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      if (result.length == 1) {
        let query ="SELECT * FROM student WHERE dept_id=(SELECT dept_id from dept WHERE hod='" + req.userData + "');";
        con.query(query, function (err, result, fields) {
          if (err) throw err;
          if (result.length > 0) {
            res.json(result);
          } else {
            res.status(401).json({ message: "Invalid User" });
          }
        });
      } else if(result.length == 0) {
        let query ="SELECT * FROM student WHERE batch_id=(SELECT batch_id from batch WHERE tutor_id='" + req.userData + "');";
        con.query(query, function (err, result, fields) {
          if (err) throw err;
          if (result.length > 0) {
            res.json(result);
          } else {
            res.status(401).json({ message: "Invalid User" });
          }
        });
      }else{
        res.status(401).json({ message: "Invalid User" });
      }
    });
  }
);
module.exports = router;
