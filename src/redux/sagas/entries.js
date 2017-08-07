/**
 * Created by Yuicon on 2017/7/16.
 * https://github.com/Yuicon
 */
import {select, put, call} from 'redux-saga/effects';
import {getEntries} from './selectors';
import {
  createEntryFailureAction,
  createEntrySuccessAction,
  findAllEntriesSuccessAction,
  findAllEntriesFailureAction,
  updateEntrySuccessAction,
  updateEntryFailureAction, likeEntryResultAction
} from '../action/entries';
import {entryCreate, entries, updateEntry, likeEntry} from './api';
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

export function* updateEntryAsync() {
  const entries = yield select(getEntries);
  const oldEntry = entries.get('oldEntry');
  const token = localStorage.getItem('token');
  const json = yield call(updateEntry.bind(this, oldEntry, token), 'updateEntry');
  if (json.success) {
    yield put(updateEntrySuccessAction(json.data));
  } else {
    console.log('createEntryAsync', json.error);
    yield put(updateEntryFailureAction('更新条目失败'));
  }
}

export function* likeEntryAsync() {
  const entries = yield select(getEntries);
  const eid = entries.get('eid');
  const token = localStorage.getItem('token');
  const json = yield call(likeEntry.bind(this, eid, token), 'updateEntry');
  if (json.success) {
    console.log('likeEntryAsyncSuccess', json.data);
    const count = json.data === 1 ? 1 : -1;
    yield put(likeEntryResultAction(eid, count));
  } else {
    console.log('likeEntryAsyncError', json.error);
  }
}

export function* entriesAsync() {
  const entriesMap = yield select(getEntries);
  const json = yield call(entries, entriesMap.get('page'), entriesMap.get('size'));
  if (json.success) {
    yield put(findAllEntriesSuccessAction(json.data));
  } else {
    console.log('entriesAsync', json.error);
    yield put(findAllEntriesFailureAction('获取条目列表失败'));
  }
}


