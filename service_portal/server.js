const app = require("./backend/app");
const con = require("./backend/database");
const cors = require("cors");
const bodyparser = require("body-parser");
const user = require("./backend/user");
var jwt = require("jsonwebtoken");
const bonafide=require("./backend/bonafide");
const studentbio = require("./backend/studentbio");
const admin = require("./backend/admin");

//Middlewares required
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
app.use("/api/login",user);
app.use("/api/bonafide",bonafide);
app.use("/api/studentbio",studentbio);
app.use("/api/admin",admin);
app.listen(3000, (req, res) => {
  console.log("Listening port 3000");
});
