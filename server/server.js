const express = require("express");
const app = express()
var mysql = require('mysql');
const bodyParser = require('body-parser');

var con = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6466493",
  password: "e6JP6hz8Pl",
  database: "sql6466493"
});
app.use(bodyParser.urlencoded({extended:true}));
app.post("/login",(req,res)=>{
    console.log(req.body);
    con.query("SELECT * FROM student WHERE rno='"+req.body.username+"' and stud_pass='"+req.body.password+"'", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(3000,(req,res)=>{
    console.log("Listening to the port 3000");
});

