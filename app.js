const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

//Body parser midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const students = require('./routes/students');
const teacher = require('./routes/teacher');
app.use('/students', students);
app.use('/teacher', teacher);



const sequelize = require('./util/databases');
const Students = require('./models/students');
const Tasks = require('./models/tasks');
const Teacher = require('./models/teacher');

sequelize.sync()
  .then(() => Tasks.create(
    JSON.parse(fs.readFileSync('./data/tasks.json')) 
  ))
  .catch(err => console.log(err) );

//Avoid Access-Control-Allow-Origin Error
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //this allow all client with everything domain to access our api
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.listen(process.env.PORT || port);
