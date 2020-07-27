import BlogActionTypes, { IBlog } from './blog.types';

export const fetchBlogsStart = () => ({
  type: BlogActionTypes.FETCH_BLOGS_START,
  payload: null
});

export const fetchBlogsSuccess = (blogsMap: IBlog[]) => ({
  type: BlogActionTypes.FETCH_BLOGS_SUCCESS,
  payload: blogsMap
});

export const fetchBlogsFailure = (errorMessage: string) => ({
  type: BlogActionTypes.FETCH_BLOGS_FAILURE,
  payload: errorMessage
});

export type BlogAction =
  | ReturnType<typeof fetchBlogsStart>
  | ReturnType<typeof fetchBlogsSuccess>
  | ReturnType<typeof fetchBlogsFailure>;
