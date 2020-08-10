import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducer';
import modalReducer from './modal/modal.reducer';
import postReducer from './post/post.reducer';

const rootReducer = combineReducers({
  blog: blogReducer,
  modal: modalReducer,
  post: postReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
