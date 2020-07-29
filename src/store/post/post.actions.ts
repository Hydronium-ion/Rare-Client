import PostActionTypes from './post.types';
import IPost from '@Types/Post';

export const fetchPostStart = (postMethod: any) => ({
  type: PostActionTypes.FETCH_POST_START,
  payload: postMethod
});

export const fetchPostSuccess = (postMap: IPost[]) => ({
  type: PostActionTypes.FETCH_POST_SUCCESS,
  payload: postMap
});

export const fetchPostFailure = (errorMessage: string) => ({
  type: PostActionTypes.FETCH_POST_FAILURE,
  payload: errorMessage
});

export type PostAction =
  | ReturnType<typeof fetchPostStart>
  | ReturnType<typeof fetchPostSuccess>
  | ReturnType<typeof fetchPostFailure>;
