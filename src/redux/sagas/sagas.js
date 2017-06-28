/**
 * Created by Yuicon on 2017/6/28.
 */
import {put, select} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import {getUsers} from './selectors';
import {INCREMENT_ASYNC} from '../action/users';
import 'whatwg-fetch';

function* registerUserAsync() {
  const users = yield select(getUsers);
  const user = users.get('user')
  console.log('visible', users.get('visible'));
  console.log('user', users.get('user'));

  fetch('http://139.224.135.86:8080/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => response.json())
    .then(json => console.log('parsed json', json))
    .catch(ex => console.log('parsing failed', ex));

  yield put({type: 'REGISTER_USER', data: !users.get('visible')});
}

export function* watchRegisterUserAsync() {
  yield* takeEvery(INCREMENT_ASYNC, registerUserAsync);
}
