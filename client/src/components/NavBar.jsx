import React, { Component } from 'react';
import logo from '../logo.svg';
import Logout from './auth/Logout';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class NavBar extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  render(){
    return (
      <div className="container">

        { this.props.isAuthenticated ?

          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="/">
              <img src={logo} width="50" height="50" alt="" />
            </a>
            <a className="navbar-brand" href="/">Life App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/tasks">Tasks</a>
                </li>
              </ul>
              <div className="form-inline mt-2 mt-md-0">
                <ul className="navbar-nav mr-auto">
                  <li>
                    <Logout />
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          :

          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="/">
              <img src={logo} width="50" height="50" alt="" />
            </a>
            <a className="navbar-brand" href="/">Life App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#news">News</a>
              </li>
                <li className="nav-item">
                  <a className="nav-link" href="mailto:juancvanrooyen@gmail.com">Contact</a>
                </li>
              </ul>
              <div className="form-inline mt-2 mt-md-0">
                <ul className="navbar-nav mr-auto">
                  <li>
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(NavBar);
