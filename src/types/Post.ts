import IUser from './User';

interface IPost {
  title: string;
  subTitle: string;
  createdAt: string;
  id: number;
  likes: number;
  content: string;
  thumbnail: string;
  author: IUser;
  tags: string[];
  views: number;
  public: boolean;
  comment: number;
}

export default IPost;
