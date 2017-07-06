/**
 * Created by Yuicon on 2017/6/27.
 */
import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducer/reducer';

import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
