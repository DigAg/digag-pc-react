/**
 * Created by Yuicon on 2017/6/28.
 */
import { takeLatest } from 'redux-saga/effects';
import {registerUserAsync, loginUserAsync} from './users';
import {REGISTER_USER, LOGIN_USER} from '../action/users';
import {createEntryAsync} from './entries';
import {CREATE_ENTRY} from '../action/entries';

export default function* rootSaga() {
  yield [
    takeLatest(REGISTER_USER, registerUserAsync),
    takeLatest(LOGIN_USER, loginUserAsync),
    takeLatest(CREATE_ENTRY, createEntryAsync)
  ];
}
