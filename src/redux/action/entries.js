/**
 * Created by Yuicon on 2017/7/16.
 * https://github.com/Yuicon
 */
export const CREATE_ENTRY = 'CREATE_ENTRY';
export const CREATE_ENTRY_SUCCESS = 'CREATE_ENTRY_SUCCESS';
export const CREATE_ENTRY_FAILURE = 'CREATE_ENTRY_FAILURE';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const UPDATE_ENTRY_SUCCESS = 'UPDATE_ENTRY_SUCCESS';
export const UPDATE_ENTRY_FAILURE = 'UPDATE_ENTRY_FAILURE';
export const FIND_ALL_ENTRIES = 'FIND_ALL_ENTRIES';
export const FIND_ALL_ENTRIES_SUCCESS = 'FIND_ALL_ENTRIES_SUCCESS';
export const FIND_ALL_ENTRIES_FAILURE = 'FIND_ALL_ENTRIES_FAILURE';

export const createEntryAction = (newEntry) => {
  return{
    type: CREATE_ENTRY,
    data: newEntry,
  }
};

export const createEntrySuccessAction = (saveSuccess) => {
  return{
    type: CREATE_ENTRY_SUCCESS,
    data: saveSuccess,
  }
};

export const createEntryFailureAction = (error) => {
  return{
    type: CREATE_ENTRY_FAILURE,
    data: error,
  }
};

export const updateEntryAction = (newEntry) => {
  return{
    type: UPDATE_ENTRY,
    data: newEntry,
  }
};

export const updateEntrySuccessAction = (saveSuccess) => {
  return{
    type: UPDATE_ENTRY_SUCCESS,
    data: saveSuccess,
  }
};

export const updateEntryFailureAction = (error) => {
  return{
    type: UPDATE_ENTRY_FAILURE,
    data: error,
  }
};

export const findAllEntriesAction = () => {
  return{
    type: FIND_ALL_ENTRIES,
  }
};

export const findAllEntriesSuccessAction = (entries) => {
  return{
    type: FIND_ALL_ENTRIES_SUCCESS,
    data: entries,
  }
};

export const findAllEntriesFailureAction = (error) => {
  return{
    type: FIND_ALL_ENTRIES_FAILURE,
    data: error,
  }
};
