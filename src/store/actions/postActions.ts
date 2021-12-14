import { ActionCreator } from "../../models/action";
import { PostsApi } from "../services";

export enum POSTS_ACTION_TYPE {
  GET_POSTS = "@@posts/START_LOADING",
}

// @ts-ignore
export const getAllPosts: ActionCreator = (pageSize: number, page: number) => ({
  type: POSTS_ACTION_TYPE.GET_POSTS,
  payload: PostsApi.getAllPosts(pageSize, page),
});
