//Express Variables
const express = require('express')
const app = express()
const port = 2000 //Localhost:*port* to view
const cors = require('cors');

//Body Parser to pass info from post form
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse/application/json
app.use(bodyParser.json());

//To allow connection from host to other
app.use(cors());

//Access Control
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Listen- Port 2000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})