/**
 * Created by Yuicon on 2017/6/27.
 */

export const REGISTER_USER = 'REGISTER_USER';

export const registerAction = (user) => {
  return{
    type:REGISTER_USER,
    data: user,
  }
};

