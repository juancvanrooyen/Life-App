import React, { Component } from 'react';
//import api from '../api';
import { connect } from 'react-redux';
import { getTasks/*, addTask*/, deleteTask } from '../actions/taskActions';
import PropTypes from 'prop-types';


class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      isLoading: false
    }
  }

// function Task(props) {
//
  leftButtonTest() {
    // CODE GOES HERE
    alert("LEFT");
  }

  rightButtonTest() {
    // CODE GOES HERE
    alert("RIGHT");
  }

  editButtonTest() {
    // CODE GOES HERE
    alert("EDIT");
  }

  onDeleteClick() {
    alert("DELETE");
    //this.deleteTask();
  }

  // Delete Button Code HERE
  //<span className="fas fa-trash-alt task-icon" title="Delete Task" onClick={this.onDeleteClick.bind(this)}></span>
  //<span className="fas fa-trash-alt task-icon" title="Delete Task"></span>



  // NEW VERSION OF COMPONENTDIDMOUNT
  // componentDidMount() {
  //   this.props.getTasks();
  // }
render(){
  // const {tasks/*, isLoading*/} = this.props.task;
    return (
      <div className="card text-white bg-dark">
        <div className="card-header row">
          <p className="col-8 task-header-text">{this.props.title}</p>
          <div className="col-4 task-header-icons">
          <span className="fas fa-arrow-left task-icon" onClick={this.leftButtonTest} title="Move Task"></span>
          <span className="fas fa-arrow-right task-icon" onClick={this.rightButtonTest}  title="Move Task"></span>
          <span className="fas fa-pencil-alt task-icon" onClick={this.editButtonTest} title="Edit Task"></span>
          <span className="fas fa-trash-alt task-icon" title="Delete Task" onClick={this.onDeleteClick}></span>
          </div>
        </div>
        <div className="card-body">
          <small className="card-text">{this.props.desc}</small>
        </div>
      </div>
    )
  }
}

export default Task;
