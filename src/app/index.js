import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Tasks from '../components/Tasks';
import CreateTask from '../components/CreateTask';
import "../style/style.css";

function App() {

  return (
    <div>
      <NavBar />
      <CreateTask />
      <Tasks />
    </div>
  )
};

export default App;
