/**
 * Created by Yuicon on 2017/7/16.
 * https://github.com/Yuicon
 */
import Immutable from 'immutable';
import {CREATE_ENTRY, CREATE_ENTRY_FAILURE, CREATE_ENTRY_SUCCESS} from '../action/entries';


const initialState = Immutable.fromJS({
  newEntry: null,
  error: null,
  saveSuccess: false,
});

export const entries = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ENTRY:
      return state.merge({
        'newEntry': action.data,
        'saveSuccess': false,
        'error': null,
      });
    case CREATE_ENTRY_SUCCESS:
      return state.set('saveSuccess', action.data);
    case CREATE_ENTRY_FAILURE:
      return state.set('error', action.data);
    default:
      return state
  }
};
