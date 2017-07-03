/**
 * Created by Yuicon on 2017/7/3.
 * https://github.com/Yuicon
 */
import {combineReducers} from 'redux';
import {auth} from './auth';
import {users} from './users';

const digagReducer = combineReducers({
  auth,
  users
});

export default digagReducer;
