import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import _ from 'lodash';
import { saveState, loadState } from '../connectivity/localstorage';
import initialStateTasks from './tasks/initialState';

const persistedState = loadState() || {
  tasks: initialStateTasks,
};

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(
  _.throttle(() => {
    saveState(store.getState());
  })
);

export default store;
