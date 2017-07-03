/**
 * Created by Yuicon on 2017/6/28.
 */
import {takeLatest, takeEvery} from 'redux-saga/effects';
import {registerUserAsync, loginUserAsync} from './users';
import {REGISTER_USER, LOGIN_USER} from '../action/users';

export default function* rootSaga() {
  yield [
    takeLatest(REGISTER_USER, registerUserAsync),
    takeEvery(LOGIN_USER, loginUserAsync)
  ];
}
