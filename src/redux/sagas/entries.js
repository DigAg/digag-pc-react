/**
 * Created by Yuicon on 2017/7/16.
 * https://github.com/Yuicon
 */
import {select, put, call} from 'redux-saga/effects';
import {getEntries} from './selectors';
import {createEntryFailureAction, createEntrySuccessAction} from '../action/entries';
import {entryCreate, entries} from './api';
import 'whatwg-fetch';

export function* createEntryAsync() {
  const entries = yield select(getEntries);
  //const auth = yield select(getAuth);
  const newEntry = entries.get('newEntry');
  //const token = auth.get('token');
  const token = localStorage.getItem('token');
  const json = yield call(entryCreate.bind(this, newEntry, token), 'createEntry');
  if (json.success) {
    yield put(createEntrySuccessAction(true));
  } else {
    console.log('createEntryAsync', json.error);
    yield put(createEntryFailureAction('创建条目失败'));
  }
}

export function* entriesAsync() {
  const json = yield call(entries(), 'entries');
  if (json.success) {
    yield put(createEntryFailureAction(true));
  } else {
    console.log('registerUserAsync', json.error);
    yield put(createEntrySuccessAction('创建条目失败'));
  }
}


