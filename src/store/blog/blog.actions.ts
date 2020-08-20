import BlogActionTypes from './blog.types';
import IBlog from '@Types/Blog';

export const fetchBlogsStart = () => ({
  type: BlogActionTypes.FETCH_BLOGS_START,
  payload: null
});

export const fetchBlogsSuccess = (blogs: IBlog[]) => ({
  type: BlogActionTypes.FETCH_BLOGS_SUCCESS,
  payload: blogs
});

export const fetchBlogsFailure = (errorMessage: string) => ({
  type: BlogActionTypes.FETCH_BLOGS_FAILURE,
  payload: errorMessage
});

export const fetchAdditionalBlogsStart = () => ({
  type: BlogActionTypes.FETCH_ADDITIONAL_BLOGS_START,
  payload: null
})

export const fetchAdditionalBlogsSuccess = (blogs: IBlog[]) => ({
  type: BlogActionTypes.FETCH_ADDITIONAL_BLOGS_SUCCESS,
  payload: blogs
});

export const fetchAdditionalBlogsFailure = (errorMessage: string) => ({
  type: BlogActionTypes.FETCH_ADDITIONAL_BLOGS_FAILURE,
  payload: errorMessage
});

export type BlogAction =
  | ReturnType<typeof fetchBlogsStart>
  | ReturnType<typeof fetchBlogsSuccess>
  | ReturnType<typeof fetchBlogsFailure>
  | ReturnType<typeof fetchAdditionalBlogsStart>
  | ReturnType<typeof fetchAdditionalBlogsSuccess>
  | ReturnType<typeof fetchAdditionalBlogsFailure>;
