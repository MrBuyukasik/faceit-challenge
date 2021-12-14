import {createStore, applyMiddleware, Store} from 'redux';
import promiseMiddleware from '../common/promiseMiddleware';
import rootReducer, {RootState} from './reducers/rootReducer';

// Store instance
const store: Store<RootState> = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware),
);
export default store;
