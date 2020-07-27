enum BlogActionTypes {
  FETCH_BLOGS_START = 'FETCH_BLOGS_START',
  FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS',
  FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE'
}

interface IUser {
  id: number;
  name: string;
  avatarUrl: string;
}

export interface IBlog {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  author: IUser;
  views: number;
  likes: number;
  tags: string;
  createdAt: string;
}

export default BlogActionTypes;
