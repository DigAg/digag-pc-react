/**
 * Created by Yuicon on 2017/6/28.
 */
import {select} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import {getUsers} from './selectors';
import {REGISTER_USER} from '../action/users';
import 'whatwg-fetch';

const getURL = (url) => `http://139.224.135.86:8080/${url}`;

function* registerUserAsync() {
  const users = yield select(getUsers);
  const user = users.get('user');
  console.log('visible', users.get('visible'));
  console.log('user', users.get('user'));

  fetch(getURL("auth/register"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => response.json())
    .then(json => console.log('parsed json', json))
    .catch(ex => console.log('parsing failed', ex));
}

export function* watchRegisterUserAsync() {
  yield* takeEvery(REGISTER_USER, registerUserAsync);
}
