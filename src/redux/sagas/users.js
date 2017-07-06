/**
 * Created by Yuicon on 2017/6/30.
 */
import {select, put, call} from 'redux-saga/effects';
import {getAuth, getUsers} from './selectors';
import {loginSuccessAction, loginFailureAction, registerSuccessAction, registerFailureAction} from '../action/users';
import {login, register} from './api';
import 'whatwg-fetch';



export function* registerUserAsync() {
  const users = yield select(getUsers);
  const newUser = users.get('newUser');

  const json = yield call(register.bind(this, newUser), 'register');
  if (json.success) {
    yield put(registerSuccessAction(true));
  } else {
    console.log('registerUserAsync', json.error);
    yield put(registerFailureAction('注册失败,用户名或帐号已存在！'));
  }

}

export function* loginUserAsync() {
  const auth = yield select(getAuth);
  const user = auth.get('user');

  const json = yield call(login.bind(this, user), 'login');
  if (json.success) {
    localStorage.setItem('token', json.data);
    yield put(loginSuccessAction(json.data));
  } else {
    yield put(loginFailureAction(json.error));
  }
}

