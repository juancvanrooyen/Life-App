import React, { /*useState,*/ Component } from 'react';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';
import api from '../api';

/*class UpdateTask extends Component {
  updateUser = event => {
    event.preventDefault();

    // THIS IS WHERE WE SEND THE VALUES TO THE EDIT FIELDS
    // window.location.href = `/movies/update/${this.props.id}`
    alert("Edit Successful!");
  }
  // AND HERE TOO!
  // render() {
  //   return <Update onClick={this.updateUser}>Update</Update>
  // }
}

class DeleteTask extends Component {
  deleteUser = event => {
    event.preventDefault();

    if (window.confirm(`Delete Task: ${this.props.id}`)) {
      api.deleteTaskById(this.props.id);
      window.location.reload();
    }
  }
  // render() {
  //   return <Delete onClick={this.deleteUser}>Delete</Delete>
  // }
}*/




class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })
    await api.getAllTasks().then(task => {
      this.setState({
        tasks: task.data.data,
        isLoading: false
      })
    })
  }

  render() {
    const {tasks/*, isLoading*/} = this.state;

    return (
      <div className="container tasks-container">
        <div className="row">
          <div className="col-4 tasks-pending" id="tasks-pending" style={{borderRight:'1px solid #ced4da'}}>
            <p className="task-section">Pending</p>
            {tasks
              .filter((taskItem) => {
                return taskItem.status === 0;
              })
              .map((taskItem, index) => {
                return (
                  <Task
                    key={index}
                    id={index}
                    status="0"
                    title={taskItem.title}
                    desc={taskItem.desc}
                    //onDelete={deleteTask}
                  />
                )
              })}
          </div>
          <div className="col-4 tasks-active" id="tasks-active" style={{borderRight:'1px solid #ced4da'}}>
            <p className="task-section">Active</p>
            {tasks
              .filter((taskItem) => {
                return taskItem.status === 1;
              })
              .map((taskItem, index) => {
                return (
                  <Task
                    key={index}
                    id={index}
                    status="0"
                    title={taskItem.title}
                    desc={taskItem.desc}
                    //onDelete={deleteTask}
                  />
                )
              })}
          </div>
          <div className="col-4 tasks-complete" id="tasks-complete" style={{borderRight:'1px solid #fff', }}>
            <p className="task-section">Complete</p>
            {tasks
              .filter((taskItem) => {
                return taskItem.status === 2;
              })
              .map((taskItem, index) => {
                return (
                  <Task
                    key={index}
                    id={index}
                    status="0"
                    title={taskItem.title}
                    desc={taskItem.desc}
                    //onDelete={deleteTask}
                  />
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
