import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducer';
import postReducer from './post/post.reducer';

const rootReducer = combineReducers({
  blog: blogReducer,
  post: postReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
