import CommentActionTypes from './comment.types';
import { CommentAction } from './comment.actions';

const INITIAL_STATE = {
  comment: null,
  isFetching: false,
  errorMessage: undefined
}

const commentReducer = (state = INITIAL_STATE, action: CommentAction) => {
  switch (action.type) {
    case CommentActionTypes.FETCH_COMMENT_START: 
      return {
        ...state,
        isFetching: true
      };
    case CommentActionTypes.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comment: action.payload
      };
    case CommentActionTypes.FETCH_COMMENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  };
};

export default commentReducer;