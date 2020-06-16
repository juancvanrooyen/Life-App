const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Task Schema
const TaskSchema = new Schema({
  owner: {
    type: String
  },
  type: {
    type: String,
    default: "task"
  },
  status: {
    type: Number
  },
  title: {
    type: String
  },
  desc: {
    type: String
  }
});

module.exports = Task = mongoose.model("tasks", TaskSchema);
