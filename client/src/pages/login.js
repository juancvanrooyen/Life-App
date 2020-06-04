import React, { Component } from 'react';
import RegisterSection from '../components/auth/RegisterSection';
import LoginSection from '../components/auth/LoginSection';

class Login extends Component {


  render() {
    return (
      <div>
        <h1>Login Page, Oy!</h1>
        <RegisterSection />
        <LoginSection />
      </div>
    )
  }
}

export default Login;
