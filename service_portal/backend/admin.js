const express = require("express");
const con = require("./database");
const jwt = require("jsonwebtoken");
var router = express.Router();

router.get("/student", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.username;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM student;";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/teacher", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.username;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM staff;";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/department", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.username;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM dept;";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/programme", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.username;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM programme;";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/batch", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.username;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM batch;";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

router.get("/bonafide", (req, res, next) => {
  try {
    let token = req.headers.authentication;
    var data = jwt.verify(token, "SECRET_CODE_USER_LOGIN");
    req.userData = data.username;
    next();
  } catch (error) {
    console.log("Error");
    res.status(401).json({ "Auth": false });
  }
}, (req, res) => {
  let query = "SELECT * FROM bonafide;";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
