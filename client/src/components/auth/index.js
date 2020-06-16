import React, { /*useState,*/ Component } from 'react';
import LoginSection from './LoginSection';
import RegisterSection from './RegisterSection';
import NavBar from '../NavBar';

class Auth extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div style={{width:"40%",margin:"auto"}}>
          <div style={{padding:"5% 15%"}}>
            <LoginSection />
          </div>
          <div style={{padding:"5% 15%"}}>
            <RegisterSection />
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
