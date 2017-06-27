/**
 * Created by Yuicon on 2017/6/27.
 */
import {createStore, combineReducers} from 'redux';
import * as reducer from '../reducer/users';

const store = createStore(
  combineReducers(reducer),
);

export default store;
