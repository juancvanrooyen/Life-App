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
        <a className="nav-link" href="/" onClick={this.props.logout}>Logout</a>
    )
  }
}

export default connect(
  null,
  { logout }
)(Logout);
