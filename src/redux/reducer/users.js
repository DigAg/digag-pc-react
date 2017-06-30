/**
 * Created by Yuicon on 2017/6/27.
 */
import Immutable from 'immutable';
import {REGISTER_USER, LOGIN_USER} from '../action/users';


const initialState = Immutable.fromJS({
  user: null,
  newUser: null,
});

export const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_USER:
      return state.set('newUser', action.data);
    case LOGIN_USER:
      return state.set('user', action.data);
    default:
      return state
  }
};
