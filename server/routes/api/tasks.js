const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../../../models/Task');

router.get('/', (req, res) => {
  Task.find()
    .sort({ date: 1})
    .then(tasks => res.json(tasks))
});

// Add Task - ADD_TASK
router.post('/', (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    desc: req.body.desc,
    status: req.body.status
  });
  newTask.save().then(task => res.json(task));
});

// Delete Task - DELETE_TASK
router.delete('/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove()
    .then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// Update Task - TASK_UP
router.post('/up/:id', (req, res, next) => {
  Task.findById(req.params.id, function(err, task){
    if (!task) {
      res.status(404).send("Not found");
    } else {
      task.status = task.status + 1 // <== This is where the Increment happens
    };
    task.save()
      .then(task => {
        res.json(task);
      }).catch(err => {
        res.status(400).send("Update Failed")
      })
  }
)})

// Update Task - TASK_DOWN
router.post('/down/:id', (req, res) => {
  Task.findById(req.params.id, function(err, task){
    if (!task) {
      res.status(404).send("Not found");
    } else {
      task.status = task.status - 1 // <== This is where the Decrement happens
    };
    task.save().then(task => {
      res.json(task);
    })
    .catch(err => {
      res.status(400).send("Update Failed")
    })
    }
)})

module.exports = router;
