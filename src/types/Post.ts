interface IPost {
  title: string;
  subTitle: string;
  content: string;
  thumbnail: string;
  authorId: number;
  tags: string[];
  public: boolean
}

export default IPost;