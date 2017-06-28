/**
 * Created by Yuicon on 2017/6/27.
 */
import {createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as reducer from '../reducer/users';

import { watchRegisterUserAsync } from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers(reducer),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchRegisterUserAsync)

export default store;
