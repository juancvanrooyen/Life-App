import axios from 'axios';
import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TASKS_LOADING,
  TASK_UP,
  TASK_DOWN
} from './types';

// GET Task data from DB
export const getTasks = () => dispatch => {
  dispatch(setTasksLoading());
  axios.get('/api/tasks')
    .then(res => dispatch({
        type: GET_TASKS,
        payload: res.data
      }));
};

// DELETE Task from DB
export const deleteTask = id => dispatch => {
  axios.delete(`/api/tasks/${id}`)
    .then(res => dispatch({
      type: DELETE_TASK,
      payload: id
    }));
};

// ADD Task to DB
export const addTask = task => dispatch => {
  axios.post('/api/tasks', task)
    .then(res => dispatch({
      type: ADD_TASK,
      payload: res.data
    }));
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
export const taskUp = (id, status) => dispatch => {
  axios.post(`/api/tasks/up/${id}`)
    .then(
      dispatch({
        type: TASK_UP,
        payload: status
      }))
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
      }
    })
};

// Pulls Individual Task data
// Sends it to the taskReducer as well as api/tasks.js Router
// End Result is that Individual Task Status is Decremented and Saved to DB
export const taskDown = (id, status) => dispatch => {
  axios.post(`/api/tasks/down/${id}`)
    .then(
      dispatch({
        type: TASK_DOWN,
        payload: status
      }))
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
      }
    })
};
