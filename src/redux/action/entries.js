/**
 * Created by Yuicon on 2017/7/16.
 * https://github.com/Yuicon
 */
export const CREATE_ENTRY = 'CREATE_ENTRY';
export const CREATE_ENTRY_SUCCESS = 'CREATE_ENTRY_SUCCESS';
export const CREATE_ENTRY_FAILURE = 'CREATE_ENTRY_FAILURE';

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
