const express = require("express");
const con = require("./database");
const jwt = require("jsonwebtoken");
var router = express.Router();

router.post("/request",(req,res,next)=>{
  try{
    let token = req.headers.authentication;
    var data = jwt.verify(token,"SECRET_CODE_USER_LOGIN");
    req.userData = data.rno;
    next();
  }catch(error){
    console.log("Error");
    res.status(401).json({"Auth":false});
  }
}, (req, res) => {
  let curr = new Date();

  let query = "INSERT INTO bonafide (rno,batch_id,type,reason,status,request,issue,comment) values('"+req.body.rno+"','"+req.body.batch_id+"','"+req.body.bonafide_type+"','"+req.body.bonafide_reason+"','NNN'"+",STR_TO_DATE('"+"" +curr.getDate() +"/"+ curr.getMonth()+1 + "/"+curr.getFullYear()+"','%d/%m/%Y'),NULL,'"+req.body.comment+"');";
  console.log(query);
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    console.log("Record inserted into bonafide table");
    res.json({"Record":"Inserted"});
  });
});
router.post("/responses",(req,res,next)=>{
  try{
    let token = req.headers.authentication;
    var data = jwt.verify(token,"SECRET_CODE_USER_LOGIN");
    req.userData = data.rno;
    next();
  }catch(error){
    console.log("Error");
    res.status(401).json({"Auth":false});
  }
},(req,res)=>{
  let query="SELECT * FROM bonafide WHERE rno='"+req.userData+"' ORDER BY request DESC;";
  con.query(query,function(err,result,fields){
    if (err) throw err;
    if (result.length > 0){
      res.json(result);
    }
  })
})
module.exports=router;
