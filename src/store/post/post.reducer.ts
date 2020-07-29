import PostActionTypes from './post.types';
import { PostAction } from './post.actions';

const INITIAL_STATE = {
  post: null,
  isFetching: false,
  errorMessage: undefined,
  method: null
};

const postReducer = (state = INITIAL_STATE, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POST_START:
      return {
        ...state,
        isFetching: true,
        method: action.payload
      };
    case PostActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        post: action.payload
      }
    case PostActionTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

// 리듀서 안에 글쓰기, 편집, 삭제 다 정의 해야하는가?

export default postReducer;

