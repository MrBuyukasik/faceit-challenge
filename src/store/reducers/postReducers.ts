import { Reducer } from "redux";

import { COMMON_ACTION_TYPE } from "../actions/commonActions";

import { Action } from "../../models/action";
import { CommonState } from "../../models/common";
import { PostsState } from "../../models/posts";
import { POSTS_ACTION_TYPE } from "../actions/postActions";

const initialState: PostsState = {};

const reducer: Reducer<PostsState, Action> = (
  state: PostsState = initialState,
  action: Action
): PostsState => {
  if (action?.error === true) {
    delete action?.type;
  }
  switch (action.type) {
    case POSTS_ACTION_TYPE.GET_POSTS: {
      let payload = state;

      payload = {
        ...state,
        getPostsResponse: action.payload,
      };

      return payload;
    }

    default: {
      let payload = state;

      if (action.error && action.payload) {
        payload = {
          ...state,
          // @ts-ignore
          error: action.payload,
        };
      }

      return payload;
    }
  }
};

export default reducer;
