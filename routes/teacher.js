const express = require('express');
const router = express.Router();
const Teacher =  require('../models/teacher');
const Tasks = require('../models/tasks');
const Answers = require('../models/answers');

router.post('/signup', (req, res) => {
  const name = req.body.name;
  const nip = req.body.nip;
  Teacher
    .create({
      name: name,
      nip: nip
    })
    .then(result => {
      console.log('Create New Teacher Member successfully !')
      res.json({"message" : " Thank you, you successfully registering!"});
    })
    .catch(err => {
      console.log(err)
    });
});

router.post('/post/tasks', (req, res) => {
  Teacher
    .findByPk(req.body.id_teacher)
    .then(teacher => {
      req.teacher = teacher;
    })
    .then(()=>{
      Tasks
        .create({
          material : req.body.material,
          challenge : req.body.challenge,
          teacherId : req.teacher.id
        })
        .then(()=>{
          console.log('Create answer successfully');
          res.json({"message" : " yeayy, Your Challenge successfully created !"});
        })
    })
    .catch(err => console.log(err));
});

router.get('/answers', (req, res) => {
  Answers
  .findAll()
  .then(tasks => {
    res.json({tasks})
  })
  .catch(err => console.log(err));
})

router.get('/tasks', (req, res) => {
  Tasks
  .findAll()
  .then(tasks => {
    res.json({tasks})
  })
  .catch(err => console.log(err));
})

router.put('/edit/task/:id', (req, res) => {
  const idTask = req.params.id;
  const updateMaterial = req.body.material;
  const updateChallenge = req.body.challenge;
  Tasks
    .findById(idTask)
    .then(task => {
      task.material = updateMaterial;
      task.challenge = updateChallenge;
      return task.save();
    })
    .then(result => {
      console.log('Update task');
      res.redirect('/teacher/tasks');
    })
    .catch(err => {
      console.log(err);
    })
});

router.delete('/task/:id', (req, res) => {
  Tasks
    .findById(req.params.id)
    .then(task => {
      return task.destroy();
    })
    .then(result => {
      res.redirect('/teacher/tasks');
    })
    .catch(err => {
      console.log(err);
    })
});


module.exports = router;