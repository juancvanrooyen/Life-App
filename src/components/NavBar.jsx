import React/*, { Component }*/ from 'react';
import logo from '../logo.svg';

function NavBar() {
  return (
    <div className="container" style={{marginBottom:'3rem'}}>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/">
          <img src={logo} width="50" height="50" alt="" />
        </a>
        <a className="navbar-brand" href="/" alt="">The Best Fkn App Ever!</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Tasks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Lists</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Finances</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
