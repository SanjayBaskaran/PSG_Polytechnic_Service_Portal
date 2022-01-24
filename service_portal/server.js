const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require('mysql');
const { error } = require("console");

var con = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6466493",
  password: "e6JP6hz8Pl",
  database: "sql6466493",
  port:3306
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.post("/test", (req, res) => {
  // console.log(req.body);
  let query = "SELECT * FROM student WHERE rno='"+req.body.rno+"' and stud_pass='"+req.body.password+"';";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    if (result.length > 0){
      res.json(result[0]);
    }else{
      res.status(401).json({"message":"Invalid User"});
    }
  });
});
app.listen(3000, (req, res) => {
  console.log("Listening port 3000");
});
