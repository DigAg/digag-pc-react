/**
 * Created by Yuicon on 2017/6/27.
 */

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const registerAction = (newUser) => {
  return{
    type:REGISTER_USER,
    data: newUser,
  }
};

export const loginAction = (user) => {
  return{
    type:LOGIN_USER,
    data: user,
  }
};

export const loginSuccessAction = (token) => {
  return {
    type: LOGIN_USER_SUCCESS,
    data: token,
  }
};

export const loginFailureAction = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    data: error,
  }
};

