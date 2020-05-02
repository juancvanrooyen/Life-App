import React/*, { Component }*/ from 'react';
//import api from '../api';

function Task(props) {

  function leftButtonTest() {
    // CODE GOES HERE
    alert("LEFT");
  }

  function rightButtonTest() {
    // CODE GOES HERE
    alert("RIGHT");
  }

  function editButtonTest() {
    // CODE GOES HERE
    alert("EDIT");
  }

  function taskDeleteButton() {
    alert("DELETE");
    // event.preventDefault();
    // console.log();

    // api.deleteTaskById(this.props.id);
    // window.location.reload();
  }

  window.addEventListener("load", function(event) {
    const descs = document.getElementsByClassName("card-text");
    for (var i = 0; i < descs.length; i++) {
      if (descs[i].innerHTML === "") {
        descs[i].parentElement.style.display = "none";
        // descs[i].innerHTML = "No Description...";
      }
    }
  });

  return (
    <div className="card text-white bg-dark">
      <div className="card-header row">
        <p className="col-8 task-header-text">{props.title}</p>
        <div className="col-4 task-header-icons">
        <span className="fas fa-arrow-left task-icon" onClick={leftButtonTest} title="Move Task"></span>
        <span className="fas fa-arrow-right task-icon" onClick={rightButtonTest}  title="Move Task"></span>
        <span className="fas fa-pencil-alt task-icon" onClick={editButtonTest} title="Edit Task"></span>
        <span className="fas fa-trash-alt task-icon" onClick={taskDeleteButton} title="Delete Task"></span>
        </div>
      </div>
      <div className="card-body">
        <small className="card-text">{props.desc}</small>
      </div>
    </div>
  )
}

export default Task;
