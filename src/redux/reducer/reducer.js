/**
 * Created by Yuicon on 2017/7/6.
 * https://github.com/Yuicon
 */
import { combineReducers } from 'redux';
import {users} from './users';
import {auth} from './auth';
import {entries} from './entries';

const reducer = combineReducers({
  users,
  auth,
  entries
});

export default reducer;
