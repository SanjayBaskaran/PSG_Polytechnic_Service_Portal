const express = require("express");
const con = require("./database");
var router = express.Router();

router.post("/request", (req, res) => {
  let query = "INSERT INTO bonafide (rno,batch_id,status,request,issue,pdf) VALUES ()";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result.length > 0){
      //let token = jwt.sign({rno:result[0].rno,stud_name:result[0].stud_name},"SECRET_CODE_USER_LOGIN",{expiresIn:"1h"});
      //res.json({"data":result[0],"token":token});
    }else{
      //res.status(401).json({"message":"Invalid User"});
    }
  });
});
module.exports=router;