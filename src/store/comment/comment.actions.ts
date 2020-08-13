import CommentActionTypes from './comment.types';
import { IComment} from '@/types/Comment'

export const fetchCommentStart = () => ({
  type: CommentActionTypes.FETCH_COMMENT_START,
  payload: null
});

export const fetchCommentSuccess = (commentMap: IComment[]) => ({
  type: CommentActionTypes.FETCH_COMMENT_SUCCESS,
  payload: commentMap
});

export const fetchCommentFailure = (errorMessage: string) => ({
  type: CommentActionTypes.FETCH_COMMENT_FAILURE,
  payload: errorMessage
});

export type CommentAction = 
  | ReturnType<typeof fetchCommentStart>
  | ReturnType<typeof fetchCommentSuccess>
  | ReturnType<typeof fetchCommentFailure>;