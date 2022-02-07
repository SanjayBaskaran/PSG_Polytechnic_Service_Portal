const mysql = require("mysql");
var db_config = {
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: "sql6.freemysqlhosting.net",
  user: "sql6466493",
  password: "e6JP6hz8Pl",
  database: "sql6466493",
  port: 3306,
};
var connection;
connection = mysql.createPool(db_config);

module.exports = connection;
