import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Tasks from './components/Tasks';
import CreateTask from './components/CreateTask';
import RegisterSection from './components/auth/RegisterSection';
import LoginSection from './components/auth/LoginSection';
import "./style/style.css";
import store from './store';
import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
      <div>
        <NavBar />
        <RegisterSection />
        <LoginSection />
        <CreateTask />
        <Tasks />
      </div>
    )
  }
};

export default App;
