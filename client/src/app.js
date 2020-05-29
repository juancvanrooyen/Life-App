import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Tasks from './components/Tasks';
import CreateTask from './components/CreateTask';
import "./style/style.css";

class App extends Component {

  render(){
    return (
      <div>
        <NavBar />
        <CreateTask />
        <Tasks />
      </div>
    )
  }
};

export default App;
