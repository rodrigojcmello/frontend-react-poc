export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostResponse = Post[] | undefined;
