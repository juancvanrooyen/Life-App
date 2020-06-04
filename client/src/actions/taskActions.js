import axios from 'axios';
import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TASKS_LOADING,
  TASK_UP,
  TASK_DOWN
} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

// GET Task data from DB
export const getTasks = () => dispatch => {
  dispatch(setTasksLoading());
  axios.get('/api/tasks')
    .then(res => dispatch({
        type: GET_TASKS,
        payload: res.data
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
      );
};

// DELETE Task from DB
export const deleteTask = id => (dispatch, getState) => {
  axios.delete(`/api/tasks/${id}`, tokenConfig(getState))
    .then(res => dispatch({
      type: DELETE_TASK,
      payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// ADD Task to DB
export const addTask = task => (dispatch, getState) => {
  axios.post('/api/tasks', task, tokenConfig(getState))
    .then(res => dispatch({
      type: ADD_TASK,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Indicates whether Task Data is Loading
export const setTasksLoading = () => {
  return {
    type: TASKS_LOADING
  };
};

// Pulls Individual Task data
// Sends it to the taskReducer as well as api/tasks.js Router
// End Result is that Individual Task Status is Incremented and Saved to DB
export const taskUp = (id, status) => (dispatch, getState) => {
  axios.post(`/api/tasks/up/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: TASK_UP,
        payload: status
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
      );
};

// Pulls Individual Task data
// Sends it to the taskReducer as well as api/tasks.js Router
// End Result is that Individual Task Status is Decremented and Saved to DB
export const taskDown = (id, status) => (dispatch, getState) => {
  axios.post(`/api/tasks/down/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: TASK_DOWN,
        payload: status
      }))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
      );
};
