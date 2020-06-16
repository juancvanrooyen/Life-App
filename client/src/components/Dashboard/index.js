import React, { Component } from 'react';
import NavBar from '../NavBar';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1>Dashboard</h1>
          <p>Yup, looks like a Dash to me!</p>
        </div>
      </div>
    )
  }
}

export default Dashboard;
