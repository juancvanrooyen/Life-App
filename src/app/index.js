import 'bootstrap/dist/css/bootstrap.min.css';
import React/*, { useState }*/ from 'react';
import NavBar from '../components/NavBar';
import Tasks from '../components/Tasks';
import CreateTask from '../components/CreateTask';
import "../style/style.css";
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  // const [tasks, setTasks] = useState([]);
  //
  // function addTask(newTask) {
  //   setTasks(prevTasks => {
  //     return [...prevTasks, newTask];
  //   });
  // }

  return (
    <div>
      <NavBar />
      <CreateTask /*onAdd={addTask}*//>
      <Tasks />
    </div>
  )
};

export default App;
