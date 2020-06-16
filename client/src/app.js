import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./style/style.css";
import store from './store';
import { loadUser } from './actions/authActions';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import * as routes from './constants/routes';
import Auth from './components/auth';
import Tasks from './components/Tasks';
import Dashboard from './components/Dashboard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  render(){
    return (
      <div>
        { this.props.isAuthenticated ?
          <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
              <header>
                <Switch>
                  <Route exact path={routes.HOME} component={() => <Home />} />
                  <Route exact path={routes.LOGIN} component={() => <Auth />} />
                  <Route exact path={routes.DASHBOARD} component={() => <Dashboard />} />
                  <Route exact path={routes.TASKS} component={() => <Tasks />} />
                  <Route component={NotFound} />
                </Switch>
              </header>
            </div>
          </Router>
        :
          <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
              <header>
                <Switch>
                  <Route exact path={routes.HOME} component={() => <Home />} />
                  <Route exact path={routes.LOGIN} component={() => <Auth />} />
                  <Route exact path={routes.DASHBOARD} component={() => <Auth />} />
                  <Route exact path={routes.TASKS} component={() => <Auth />} />
                  <Route component={NotFound} />
                </Switch>
              </header>
            </div>
          </Router>
        }
      </div>
    )
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(App);
