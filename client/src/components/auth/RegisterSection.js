import React, { /*useState,*/ Component } from 'react';
import { connect } from 'react-redux';
//import { addTask } from '../actions/taskActions';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterSection extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps){
    const { error } = this.props;
    if(error !== prevProps.error){
      // Check for Register Error
      if(error.id === 'REGISTER_FAIL'){
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

    const { name, email, password } = this.state;

    // Create User Object
    const newUser = {
      name,
      email,
      password
    };

    // Attempt Registration
    this.props.register(newUser);
  }

  render() {
    return (
      <div>
        <form className="container createTaskContainer">
          <h4 style={{color: "#ced4da"}}>You're New?</h4>
          <p>Then Sign Up!</p>
          <div className="form-row">
            <div className="col-sm-12">
              <input
                type="text"
                name="name"
                className="form-control userNameInput"
                placeholder="Your Name..."
                required={true}
                onChange={this.onChange}
              />
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Your Email..."
                onChange={this.onChange}
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
              <button type="submit" className="btn btn-dark btn-block" onClick={this.onSubmit}>Register</button>
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

export default connect(mapStateToProps, { register, clearErrors })(RegisterSection);
