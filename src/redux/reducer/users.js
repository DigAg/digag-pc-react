/**
 * Created by Yuicon on 2017/6/27.
 */
import Immutable from 'immutable';
import {REGISTER_USER} from '../action/users';


const initialState = Immutable.fromJS({visible: false, user: null});

export const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_USER:
      return state.set('user', action.data);
    default:
      return state
  }
};
