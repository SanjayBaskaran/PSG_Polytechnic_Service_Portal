const mysql = require("mysql2");
var db_config = {
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: "localhost",
  user: "root",
  password: "",
  database: "polytech1",
  port: 3306,
};
var connection;
connection = mysql.createPool(db_config);

module.exports = connection;
