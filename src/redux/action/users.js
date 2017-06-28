/**
 * Created by Yuicon on 2017/6/27.
 */

export const REGISTER_USER = 'REGISTER_USER';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

export const registerAction = (data) => {
  return{
    type:REGISTER_USER,
    data,
  }
}

export const testAction = (data) => {
  return{
    type:INCREMENT_ASYNC,
    data,
  }
}
