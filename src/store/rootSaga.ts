import { all, call } from 'redux-saga/effects';

import { blogSagas } from './blog/blog.sagas';
import { postSagas } from './post/post.sagas';

export default function* rootSaga() {
  yield all([blogSagas(), postSagas()]);
}
