/**
 * Created by Yuicon on 2017/6/27.
 */
import Immutable from 'immutable';
import {SET_STATE} from '../action/users';


const initialState = Immutable.fromJS({visible: false})

export const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE:
      return state.set('visible', action.data);
    default:
      return state
  }
}
