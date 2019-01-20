const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks');
const Answers = require('../models/answers');
const Students = require('../models/students');

router.get('/tasks', (req, res) => {
  Tasks
  .findAll()
  .then(tasks => {
    res.json({tasks})
  })
  .catch(err => console.log(err));
})

router.get('/task/:id', (req, res) => {
  const idTask = req.params.id;
  Tasks
  .findAll({
    where: {id: idTask}
  })
  .then(tasks => {
    res.json(tasks[0])
  })
  .catch(err => console.log(err));
});

router.post('/post/answer', (req, res) => {
  Students
    .findByPk(req.body.id_student)
    .then(student => {
      req.student = student;
    })
    .then(()=>{
      Tasks
        .findByPk(req.body.id_task)
        .then(task => {
          req.task = task;
        })
        .then(()=>{
          Answers
            .create({
              answer_result : req.body.answer,
              studentId : req.student.id,
              taskId : req.task.id
            })
            .then(()=>{
              console.log('Create answer successfully');
              res.json({"message" : " yeayy, Your answer successfully created !"});
            })
        })
    })
    .catch(err => err);
});

router.post('/signup', (req, res) => {
  const name = req.body.name;
  const nim = req.body.nim;
  Students
    .create({
      name: name,
      nim: nim
    })
    .then(result => {
      console.log('Create New Student Member successfully !')
      res.json({"message" : " Thank you, you successfully registering!"});
    })
    .catch(err => {
      console.log(err)
    });
});

module.exports = router;