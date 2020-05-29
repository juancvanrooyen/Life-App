import { combineReducers } from 'redux';
import taskReducer/*, authreducer*/ from './taskReducer';

export default combineReducers({
  task: taskReducer
  /*auth: authreducer*/
})
