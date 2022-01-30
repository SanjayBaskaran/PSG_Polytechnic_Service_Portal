const express = require("express");
const con = require("./database");
var router = express.Router();

router.post("/request", (req, res) => {
  let curr = new Date();

  let query = "INSERT INTO bonafide values('"+req.body.rno+"','"+req.body.batch_id+"','"+req.body.bonafide_type+"','"+req.body.bonafide_reason+"','NNN'"+",STR_TO_DATE('"+"" +curr.getDate() +"/"+ curr.getMonth()+1 + "/"+curr.getFullYear()+"','%d/%m/%Y'),NULL,'"+req.body.comment+"');";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log("Record inserted into bonafide table");
    res.json({"Record":"Inserted"});
  });
});
module.exports=router;
