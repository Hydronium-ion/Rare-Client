export interface IComment {
  id: string;
  user: {
    id: string;
    username: string;
    profile: {
      id: string;
      thumbnail: string;
    };
  };
  text: string | null;
  created_at: string;
  deleted: boolean;
}