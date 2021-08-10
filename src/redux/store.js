import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getTokensList, getTokenSupply } from './middlewares/crud';
import userReducer from './reducers/user';

const reducer = combineReducers({ userReducer });

const store = createStore(reducer, applyMiddleware(getTokensList, getTokenSupply));
window.store = store

export default store;