const Task = require('../../models/Task');

createTask = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "No Tasks. Feel Free To Create Some."
    })
  }

  const task = new Task(body)

  if (!task) {
    return res.status(400).json({ success: false, error: err })
  }

  task
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: task._id,
        message: "Task Created!"
      })
    })
    .catch(error => {
      return res.status(400).json({
        success: false,
        message: "Task Not Created, Try Again."
      })
    })
};

updateTask = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Cannot Update Task."
    })
  }

  Task.findOne({ _id: req.params.id }, (err, task) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Task Not Found."
      })
    }

    task.status = body.status;
    task.title = body.title;
    task.desc = body.desc;
    task
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: task._id,
          message: "Task Updated."
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: "Task Not Updated."
        })
      })
  });
}

deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id }, (err, task) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!task) {
      return res
        .status(404)
        .json({ success: false, error: `Task Not Found.` })
    }

    return res.status(200).json({ success: true, data: task })
  }).catch(err => console.log(err))
};

getTaskById = async (req, res) => {
  await Task.findOne({ _id: res.params.id }, (err, task) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!task) {
      return res
        .status(404)
        .json({ success: false, error: `Task Not Found.`})
    }
    return res.status(200).json({ success: true, data: task })
  }).catch(err => console.log(err))
}

getTasks = async (req, res) => {
  await Task.find({}, (err, tasks) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!tasks.length) {
      return res
        .status(400)
        .json({ success: flase, error: "Tasks Not Found." })
    }
    return res.status(200).json({ success: true, data: tasks })
  }).catch(err => console.log(err));
}


module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTaskById
};
