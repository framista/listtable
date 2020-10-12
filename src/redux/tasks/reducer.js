import { TASK_ADD, TASK_DELETE, TASK_TOOGLE_DONE } from '../types';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return [action.payload, ...state];
    case TASK_DELETE:
      return state.filter(({ id }) => id !== action.payload);
    case TASK_TOOGLE_DONE:
      console.log(action.payload);
      return state.map((task) => {
        task.done = task.id === action.payload ? !task.done : task.done;
        return task;
      });
    default:
      return state;
  }
};

export default reducer;
