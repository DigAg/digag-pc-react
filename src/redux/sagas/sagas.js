/**
 * Created by Yuicon on 2017/6/28.
 */
import { takeLatest, takeEvery } from 'redux-saga/effects';
import {registerUserAsync, loginUserAsync, currentUserAsync} from './users';
import {REGISTER_USER, LOGIN_USER, CURRENT_USER} from '../action/users';
import {createEntryAsync, entriesAsync, likeEntryAsync, updateEntryAsync,
  entriesByUserAsync,
} from './entries';
import {CREATE_ENTRY, FIND_ALL_ENTRIES, LIKE_ENTRY, UPDATE_ENTRY, FIND_USER_ENTRIES,
} from '../action/entries';

export default function* rootSaga() {
  yield [
    takeLatest(REGISTER_USER, registerUserAsync),
    takeLatest(LOGIN_USER, loginUserAsync),
    takeEvery(CREATE_ENTRY, createEntryAsync),
    takeLatest(FIND_ALL_ENTRIES, entriesAsync),
    takeEvery(UPDATE_ENTRY, updateEntryAsync),
    takeEvery(LIKE_ENTRY, likeEntryAsync),
    takeLatest(FIND_USER_ENTRIES, entriesByUserAsync),
    takeLatest(CURRENT_USER, currentUserAsync),
  ];
}
