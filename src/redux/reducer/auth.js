/**
 * Created by Yuicon on 2017/7/3.
 * https://github.com/Yuicon
 */
import Immutable from 'immutable';
import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER} from '../action/users';


const initialState = Immutable.fromJS({
  token: null,
  error: null,
  user: null
});

export const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return state.merge({
        'user': action.data,
        'error': null,
        'token': null,
      });
    case LOGIN_USER_SUCCESS:
      return state.merge({
        'token': action.data,
        'error': null
      });
    case LOGIN_USER_FAILURE:
      return state.merge({
        'token': null,
        'error': action.data
      });
    default:
      return state
  }
};
