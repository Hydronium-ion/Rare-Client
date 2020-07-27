import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducer';

const rootReducer = combineReducers({
  blog: blogReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
