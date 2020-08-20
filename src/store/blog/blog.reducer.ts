import BlogActionTypes from './blog.types';
import { BlogAction } from './blog.actions';
import IBlog from "@Types/Blog";

const INITIAL_STATE = {
  blogs: [],
  isFetching: false,
  errorMessage: undefined,
  page: 0
};

const blogReducer = (state = INITIAL_STATE, action: BlogAction) => {
  switch (action.type) {
    case BlogActionTypes.FETCH_BLOGS_START:
      return {
        ...state,
        isFetching: true,
        page: 0
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
    case BlogActionTypes.FETCH_ADDITIONAL_BLOGS_START:
      return {
        ...state,
        isFetching: true,
        page: state.page + 1
      }
    case BlogActionTypes.FETCH_ADDITIONAL_BLOGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        blogs: (<IBlog[]>state.blogs).concat((<IBlog[]>action.payload))
      };
    case BlogActionTypes.FETCH_ADDITIONAL_BLOGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  };
};

export default blogReducer;
