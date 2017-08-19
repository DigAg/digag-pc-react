/**
 * Created by Yuicon on 2017/7/16.
 * https://github.com/Yuicon
 */
export const CREATE_ENTRY = 'CREATE_ENTRY';
export const CREATE_ENTRY_SUCCESS = 'CREATE_ENTRY_SUCCESS';
export const CREATE_ENTRY_FAILURE = 'CREATE_ENTRY_FAILURE';
export const LIKE_ENTRY = 'LIKE_ENTRY';
export const LIKE_RESULT_ENTRY = 'LIKE_RESULT_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const UPDATE_ENTRY_SUCCESS = 'UPDATE_ENTRY_SUCCESS';
export const UPDATE_ENTRY_FAILURE = 'UPDATE_ENTRY_FAILURE';
export const FIND_ALL_ENTRIES = 'FIND_ALL_ENTRIES';
export const FIND_ALL_ENTRIES_SUCCESS = 'FIND_ALL_ENTRIES_SUCCESS';
export const FIND_ALL_ENTRIES_FAILURE = 'FIND_ALL_ENTRIES_FAILURE';
export const FIND_USER_ENTRIES = 'FIND_USER_ENTRIES';
export const FIND_USER_ENTRIES_SUCCESS = 'FIND_USER_ENTRIES_SUCCESS';
export const FIND_USER_ENTRIES_FAILURE = 'FIND_USER_ENTRIES_FAILURE';

export const likeEntryAction = (eid) => {
  return{
    type: LIKE_ENTRY,
    data: eid,
  }
};

export const likeEntryResultAction = (eid, count) => {
  return{
    type: LIKE_RESULT_ENTRY,
    data: {eid, count},
  }
};

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

export const findAllEntriesAction = (page = 0, size = 10) => {
  return{
    type: FIND_ALL_ENTRIES,
    data: {page, size}
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

export const findUserEntriesAction = (page = 0, size = 10, username) => {
  return{
    type: FIND_USER_ENTRIES,
    data: {page, size, username}
  }
};

export const findUserEntriesSuccessAction = (entriesByUser) => {
  return{
    type: FIND_USER_ENTRIES_SUCCESS,
    data: entriesByUser,
  }
};

export const findUserEntriesFailureAction = (error) => {
  return{
    type: FIND_USER_ENTRIES_FAILURE,
    data: error,
  }
};
