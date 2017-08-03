/**
 * Created by Yuicon on 2017/6/27.
 */

import Immutable from 'immutable';

export const Entry = Immutable.Record({
  id: null,
  author: null,
  collectionCount: 0,
  commentsCount: 0,
  content: null,
  createdAt: null,
  english: false,
  original: true,
  originalUrl: null,
  title: null,
  type: null,
  updatedAt: null,
  viewsCount: 0
});

