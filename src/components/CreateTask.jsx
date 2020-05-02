import React, { useState } from 'react';

function CreateTask(props) {
  const [task, setTask] = useState({
    title:"",
    desc:"",
    status: 0
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTask(prevTasks => {
      return {
        ...prevTasks,
        [name]: value
      };
    });
  };

  function submitTask(event) {
    props.onAdd(task);
    setTask({
      title: "",
      desc: "",
      status: 0
    });
    event.preventDefault();
  }

  // State: Change Button Text
  const [dropdown, setDropdown] = useState("Pending");
  function dropdownChange(e) {
    if (Number(e.target.value) === 2) {
      setDropdown("Complete");
    } else if (Number(e.target.value) === 1) {
      setDropdown("Active");
    } else {
      setDropdown("Pending");
    }
  };

      return (
      <form className="container createTaskContainer">
        <div className="form-row" style={{marginBottom:'3rem'}}>
          <div className="col-6">
            <input
              type="text"
              name="title"
              className="form-control taskTitleInput"
              placeholder="Title..."
              required={true}
              onChange={handleChange}
              value={task.title}
            />
            <input
              type="text"
              name="desc"
              className="form-control"
              placeholder="Description..."
              onChange={handleChange}
              value={task.desc}
            />
          </div>
          <div className="col-3">
            <select className="form-control" id="taskStatusSelect" onClick={dropdownChange} defaultValue={task.status} >
              <option value={0}>Pending</option>
              <option value={1}>Active</option>
              <option value={2}>Complete</option>
            </select>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-dark btn-block" onClick={submitTask}>Add To {dropdown}</button>
          </div>
        </div>
      </form>
    );
}

export default CreateTask;
