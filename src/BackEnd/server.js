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

//Mongoose- To connect to my database
const mongoose = require('mongoose');

//Calls main to make a connection with the database
main().catch(err => console.log(err));

//Giving database address
async function main() {
  //Connect to Cluster- Open to all IP Addresses//Connect to Databases
  await mongoose.connect('mongodb+srv://admin:adminPass@gradecluster.srojooy.mongodb.net/Grades?retryWrites=true&w=majority');
  //Username: user Password: pass
}

//Convert to Type
const gradeSchema = new mongoose.Schema({
  module: String,
  teacher: String,
  exam: String,
  grade: Number,
  year: Number
});

//Model to interact with databases
const gradeModel = mongoose.model('listGrades', gradeSchema);

//To allow connection from host to other
app.use(cors());

//Access Control
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Put data embedded body
app.post('/api/grades', (req, res) => {
  console.log(req.body);

  //Write data to page
  gradeModel.create({
    module: req.body.module,
    teacher: req.body.teacher,
    exam: req.body.exam,
    grade: req.body.grade,
    year: req.body.year
  })

  //Update User
  res.send('Grade Data Received Successfully');
})

//HTTP is handled by req & res, Gets all json Data
app.get('/api/grades', (req, res) => {
  //To interact to database
  gradeModel.find((error, data) => {
    res.json(data);
  })
})

//Pass ID to URL
// ' : ' is to say variable
app.get('/api/grades/:id', (req, res) => {
  console.log("Student ID: " + req.params.id);

  //Find Grade Details by ID
  gradeModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

//Update by Id
app.put('/api/grades/:id', (req, res) => {
  console.log("Student #" + req.params.id + " has been Updated");

  //Update Grade Model
  gradeModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

//Delete by ID
app.delete('/api/grades/:id', (req, res) => {
  console.log('Deleting Student with ID: ' + req.params.id);

  //Find Grade by ID and Delete
  gradeModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})

//Listen- Port 2000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})