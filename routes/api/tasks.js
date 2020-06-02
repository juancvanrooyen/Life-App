const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Task Model
const Task = require('../../models/Task');

// @route   GET api/tasks
// @desc    Get task data
// @access  Private
router.get('/', (req, res) => {
  Task.find()
    .sort({ date: 1})
    .then(tasks => res.json(tasks))
});

// @route   POST api/tasks
// @desc    Send task data
// @access  Private
router.post('/', auth, (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    desc: req.body.desc,
    status: req.body.status
  });
  newTask.save().then(task => res.json(task));
});

// @route   DELETE api/tasks
// @desc    Delete task data
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove()
    .then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   POST api/tasks
// @desc    Update task data - Increment task Status
// @access  Private
router.post('/up/:id', auth, (req, res, next) => {
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

// @route   POST api/tasks
// @desc    Update task data - Decrement task Status
// @access  Private
router.post('/down/:id', auth, (req, res) => {
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
