import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }
  render () {
    return (
      <li className="nav-item">
        <a className="nav-link" href="/" onClick={this.props.logout}>Logout</a>
      </li>
    )
  }
}

export default connect(
  null,
  { logout }
)(Logout);
