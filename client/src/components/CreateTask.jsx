import React, { /*useState,*/ Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';


class CreateTask extends Component {
  state = {
    title: '',
    desc: '',
    status: 0
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    };

  onSubmit = e => {
    e.preventDefault();
    const newTask = {
      title: this.state.title,
      desc: this.state.desc,
      status: this.state.status
    }
    this.props.addTask(newTask);
  }

  render() {
    return (
    <form className="container createTaskContainer">
      <div className="form-row">
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            name="title"
            className="form-control taskTitleInput"
            placeholder="Title..."
            required={true}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="desc"
            className="form-control"
            placeholder="Description..."
            onChange={this.onChange}
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <select className="form-control" id="taskStatusSelect" name="status" onClick={this.onChange} onChange={this.onChange} >
            <option value={0}>Pending</option>
            <option value={1}>Active</option>
            <option value={2}>Complete</option>
          </select>
        </div>
        <div className="col-md-3 col-sm-12">
          <button type="submit" className="btn btn-dark btn-block" onClick={this.onSubmit}>Add Task</button>
        </div>
      </div>
    </form>
  );
  }
}

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps, { addTask })(CreateTask);
