import { PostsResponse } from "../apis";

interface Posts {
  getPostsResponse?: PostsResponse[];
}

export type PostsState = Readonly<Posts>;
