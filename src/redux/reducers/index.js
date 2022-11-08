import counterReducer from './CounterSlice';
import authReducer from './AuthSlice';
import { combineReducers } from '@reduxjs/toolkit';

const reducers = combineReducers({ counter: counterReducer, auth: authReducer });

export default reducers;
