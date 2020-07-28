import IUser from './User';

interface IBlog {
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

export default IBlog;
