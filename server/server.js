const express = require("express");
const app = express()
const cors = require("cors");
var mysql = require('mysql');
const bodyParser = require('body-parser');

var con = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6466493",
  password: "e6JP6hz8Pl",
  database: "sql6466493"
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.post("/login",cors(),(req,res)=>{
    console.log(req.body);
    con.query("SELECT * FROM student WHERE rno='"+req.body.username+"' and stud_pass='"+req.body.password+"'", function (err, result, fields) {
        if (err) throw err;
        console.log(req.body);
        res.json(result);
    });
});
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.listen(3100,(req,res)=>{
    console.log("Listening to the port 3100");
});

