import {createStore, applyMiddleware, combineReducers} from 'redux';
import userReducer from './userReducer';
import friendReducer from './friendReducer';
import promiseMiddleware from 'redux-promise-middleware';

const rootReducer = combineReducers({
    user: userReducer,
    friend: friendReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
