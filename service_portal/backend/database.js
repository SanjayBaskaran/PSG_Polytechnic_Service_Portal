const mysql = require('mysql');
const con = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6466493",
  password: "e6JP6hz8Pl",
  database: "sql6466493",
  port:3306
});
con.wait_timeout=28800;
module.exports = con;
