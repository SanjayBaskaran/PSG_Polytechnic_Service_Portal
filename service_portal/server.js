const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require('mysql');
var jwt = require("jsonwebtoken");
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
    "Origin, X-Requested-With, Content-Type, Accept, Authentication"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//localhost:3000/test
app.post("/test", (req, res) => {
  // console.log(req.body);
  let query = "SELECT * FROM student WHERE rno='"+req.body.rno+"' and stud_pass='"+req.body.password+"';";
  // console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    if (result.length > 0){
      let token = jwt.sign({rno:result[0].rno,stud_name:result[0].stud_name},"SECRET_CODE_USER_LOGIN",{expiresIn:"1h"});
      res.json({"data":result[0],"token":token});
    }else{
      res.status(401).json({"message":"Invalid User"});
    }
  });
});
app.get("/api/student",(req,res,next)=>{
  try{
    let token = req.headers.authentication;
    // console.log(token);
    var data = jwt.verify(token,"SECRET_CODE_USER_LOGIN");
    // console.log(data);
    req.userData = data.rno;
    next();
  }catch(error){
    console.log("Error");
    res.status(401).json({"message":"Auth Failed"});
  }
},(req,res)=>{
  let query = "SELECT * FROM student WHERE rno='"+req.userData+"';";
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
