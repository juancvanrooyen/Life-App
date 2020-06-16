import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks, deleteTask, taskUp, taskDown } from '../actions/taskActions';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import CreateTask from './CreateTask';

class Tasks extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     tasks: [],
  //     isLoading: false
  //   }
  // }
  state = {
    tasks: [],
    isLoading: false
  }

  // New version of componentDidMount
  componentDidMount() {
    this.props.getTasks();
  }

  // Fires When Task's Left Arrow is Clicked
  // Points to taskActions.js - taskDown Function
  onTaskDown = (id, status) => {
    this.props.taskDown(id, status);
  }

  // Fires When Task's Right Arrow is Clicked
  // Points to taskActions.js - taskUp Function
  onTaskUp = (id, status) => {
    this.props.taskUp(id, status);
  }

  editButtonTest() {
    // CODE GOES HERE
    console.log("Functionality Coming Soon");
  }

  onTaskTextEdit() {
    console.log("Functionality Coming Soon");
  }

  // Fires When Task's Delete Button is Clicked
  // Points to taskActions.js - deleteTask Function
  onDeleteClick = (id) => {
    //alert("DELETE");
    this.props.deleteTask(id);
  }

  // Below is where the Individual Task Components are Mapped into their Respective Columns
  // This is done by Filtering them according to their Status values
  // Status of 0 = Pending | Status of 1 = Active | Status of 2 = Complete
  // Each Task Rendered has its own set of Buttons with Event Listeners, connected to Functions above the Render
  render() {
    const {tasks} = this.props.task;
    return (
      <div>
        <NavBar />
        <CreateTask />
        <div className="container tasks-container">
          <div className="row">
            <div className="col-md-4 col-sm-12 task-cols tasks-pending" id="tasks-pending" style={{borderRight:'1px solid #ced4da'}}>
              <p className="task-section">Pending</p>
              {tasks
                .filter(
                  (taskItem) => {
                    return taskItem.owner === this.props.auth.user._id;
                  }
                )
                .filter((taskItem) => {
                  return taskItem.status === 0;
                })
                .map(({index, _id, title, desc, status}) => {
                  return (
                    <div key={_id} className="card text-white bg-dark">
                      <div className="card-header row">
                        <p className="col-8 task-header-text" onBlur={this.onTaskTextEdit.bind(this, title)}>{title}</p>
                        <div className="col-4 task-header-icons">
                        <span className="fas fa-arrow-left task-icon" title="Move Task" onClick={this.onTaskDown.bind(this, _id, status)}></span>
                        <span className="fas fa-arrow-right task-icon" title="Move Task" onClick={this.onTaskUp.bind(this, _id, status)}></span>
                        <span className="fas fa-pencil-alt task-icon" onClick={this.editButtonTest} title="Edit Task"></span>
                        <span className="fas fa-trash-alt task-icon" title="Delete Task" onClick={this.onDeleteClick.bind(this, _id)}></span>
                        </div>
                      </div>
                      <div className="card-body" style={{display: "none"}}>
                        <small className="card-text">{desc}</small>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className="col-md-4 col-sm-12 task-cols tasks-active" id="tasks-active" style={{borderRight:'1px solid #ced4da'}}>
              <p className="task-section">Active</p>
              {tasks
                .filter(
                  (taskItem) => {
                    return taskItem.owner === this.props.auth.user._id;
                  }
                )
                .filter((taskItem) => {
                  return taskItem.status === 1;
                })
                .map(({index, _id, title, desc, status}) => {
                  return (
                    <div key={_id} className="card text-white bg-dark">
                      <div className="card-header row">
                        <p className="col-8 task-header-text">{title}</p>
                        <div className="col-4 task-header-icons">
                        <span className="fas fa-arrow-left task-icon" title="Move Task" onClick={this.onTaskDown.bind(this, _id, status)}></span>
                        <span className="fas fa-arrow-right task-icon" title="Move Task" onClick={this.onTaskUp.bind(this, _id, status)}></span>
                        <span className="fas fa-pencil-alt task-icon" onClick={this.editButtonTest} title="Edit Task"></span>
                        <span className="fas fa-trash-alt task-icon" title="Delete Task" onClick={this.onDeleteClick.bind(this, _id)}></span>
                        </div>
                      </div>
                      <div className="card-body" style={{display: "none"}}>
                        <small className="card-text">{desc}</small>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className="col-md-4 col-sm-12 task-cols tasks-complete" id="tasks-complete" style={{borderRight:'1px solid #fff', }}>
              <p className="task-section">Complete</p>
              {tasks
                .filter(
                  (taskItem) => {
                    return taskItem.owner === this.props.auth.user._id;
                  }
                )
                .filter((taskItem) => {
                  return taskItem.status === 2;
                })
                .map(({index, _id, title, desc, status}) => {
                  return (
                    <div key={_id} className="card text-white bg-dark">
                      <div className="card-header row">
                        <p className="col-8 task-header-text">{title}</p>
                        <div className="col-4 task-header-icons">
                        <span className="fas fa-arrow-left task-icon" title="Move Task" onClick={this.onTaskDown.bind(this, _id, status)}></span>
                        <span className="fas fa-arrow-right task-icon" title="Move Task" onClick={this.onTaskUp.bind(this, _id, status)}></span>
                        <span className="fas fa-pencil-alt task-icon" onClick={this.editButtonTest} title="Edit Task"></span>
                        <span className="fas fa-trash-alt task-icon" title="Delete Task" onClick={this.onDeleteClick.bind(this, _id)}></span>
                        </div>
                      </div>
                      <div className="card-body" style={{display: "none"}}>
                        <small className="card-text">{desc}</small>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  taskUp: PropTypes.func.isRequired,
  taskDown: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  task: state.task,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
})

// Hide section of Task that contains the Description, only when the Desc is empty.
window.addEventListener("load", function() {
  const descs = document.getElementsByClassName("card-text");
  for (var i = 0; i < descs.length; i++) {
    if (descs[i].innerHTML !== "") {
      descs[i].parentElement.style.display = "block";
    }
  }
});

export default connect(mapStateToProps, { getTasks, deleteTask, taskUp, taskDown })(Tasks);
