import React, { /*useState,*/ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class LoginSection extends Component {
  state = {
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps){
    const { error } = this.props;
    if(error !== prevProps.error){
      // Check for Register Error
      if(error.id === 'LOGIN_FAIL'){
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  // CLEAR ERRORS - Brad Used in Modal's Toggle function
  // this.props.clearErrors();

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    }
    // Attempt Login
    this.props.login(user);
  }

  render() {
    return (
      <div>
        <form className="container createTaskContainer">
          <h4 style={{color: "#ced4da"}}>One Of Us?</h4>
          <p>One Of Us! One Of Us!</p>
          <div className="form-row">
            <div className="col-sm-12">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Your Email..."
                onChange={this.onChange}
                autoFocus
              />
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password..."
                onChange={this.onChange}
              />
            </div>
            <div className="col-sm-12">
              <button type="submit" className="btn btn-dark btn-block" onClick={this.onSubmit}>Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginSection);
