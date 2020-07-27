import BlogActionTypes from './blog.types';
import { BlogAction } from './blog.actions';

const INITIAL_STATE = {
  blogs: null,
  isFetching: false,
  errorMessage: undefined
};

const blogReducer = (state = INITIAL_STATE, action: BlogAction) => {
  switch (action.type) {
    case BlogActionTypes.FETCH_BLOGS_START:
      return {
        ...state,
        isFetching: true
      };
    case BlogActionTypes.FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        blogs: action.payload
      };
    case BlogActionTypes.FETCH_BLOGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default blogReducer;
