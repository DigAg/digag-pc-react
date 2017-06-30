/**
 * Created by Yuicon on 2017/6/27.
 */

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

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

