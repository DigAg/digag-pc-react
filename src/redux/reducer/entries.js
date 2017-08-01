/**
 * Created by Yuicon on 2017/7/16.
 * https://github.com/Yuicon
 */
import Immutable from 'immutable';
import {
  CREATE_ENTRY,
  CREATE_ENTRY_FAILURE,
  CREATE_ENTRY_SUCCESS,
  FIND_ALL_ENTRIES,
  FIND_ALL_ENTRIES_FAILURE,
  FIND_ALL_ENTRIES_SUCCESS,
  UPDATE_ENTRY,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE, LIKE_ENTRY, LIKE_RESULT_ENTRY
} from '../action/entries';


const initialState = Immutable.fromJS({
  newEntry: null,
  error: null,
  saveSuccess: false,
  entries: [],
  oldEntry: null,
  eid: null,
});

export const entries = (state = initialState, action = {}) => {
  let entries;
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
    case FIND_ALL_ENTRIES:
      return state.merge({
        'entries': [],
        'error': null,
      });
    case FIND_ALL_ENTRIES_SUCCESS:
      return state.set('entries', action.data.content);
    case FIND_ALL_ENTRIES_FAILURE:
      return state.set('error', action.data);
    case UPDATE_ENTRY:
      return state.merge({
        'error': null,
        'oldEntry': action.data
      });
    case UPDATE_ENTRY_SUCCESS:
      entries = state.get('entries').concat();
      entries[entries.findIndex(entry => entry.id === action.data.id)] = action.data;
      return state.set('entries', entries);
    case UPDATE_ENTRY_FAILURE:
      return state.merge({
        'error': action.data,
        'oldEntry': null
      });
    case LIKE_ENTRY:
      return state.merge({
        'eid': action.data
      });
    case LIKE_RESULT_ENTRY:
      entries = state.get('entries').concat();
      let likeEntry = entries[entries.findIndex(entry => entry.id === action.data.eid)];
      likeEntry.collectionCount = Number(action.data.count) + Number(likeEntry.collectionCount);
      return state.set('entries', entries);
    default:
      return state
  }
};
