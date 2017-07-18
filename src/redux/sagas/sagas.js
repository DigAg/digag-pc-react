/**
 * Created by Yuicon on 2017/6/28.
 */
import { takeLatest } from 'redux-saga/effects';
import {registerUserAsync, loginUserAsync} from './users';
import {REGISTER_USER, LOGIN_USER} from '../action/users';
import {createEntryAsync, entriesAsync} from './entries';
import {CREATE_ENTRY, FIND_ALL_ENTRIES} from '../action/entries';

export default function* rootSaga() {
  yield [
    takeLatest(REGISTER_USER, registerUserAsync),
    takeLatest(LOGIN_USER, loginUserAsync),
    takeLatest(CREATE_ENTRY, createEntryAsync),
    takeLatest(FIND_ALL_ENTRIES, entriesAsync),
  ];
}
