import { combineReducers } from 'redux';
import tasksReducer from './tasks/reducer';
import tableReducer from './table/reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  table: tableReducer,
});

export default rootReducer;
