/**
 * Created by Yuicon on 2017/6/30.
 */
import {select, put, call} from 'redux-saga/effects';
import {getUsers} from './selectors';
import {loginSuccessAction, loginFailureAction} from '../action/users';
import 'whatwg-fetch';

const getURL = (url) => `http://139.224.135.86:8080/${url}`;

export function* registerUserAsync() {
  const users = yield select(getUsers);
  const newUser = users.get('newUser');

  fetch(getURL("auth/register"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).then(response => response.json())
    .then(json => console.log('parsed json', json))
    .catch(ex => console.log('parsing failed', ex));
}

export function* loginUserAsync() {
  const users = yield select(getUsers);
  const user = users.get('user');

  const json = yield call(login.bind(this, user), 'token');
  if (json.success) {
    yield put(loginSuccessAction(json.data));
  } else {
    yield put(loginFailureAction(json.error));
  }
}

const login = (user) => {
  return fetch(getURL("auth/login"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};
