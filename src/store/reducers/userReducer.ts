import { Reducer } from "redux";

import { COMMON_ACTION_TYPE } from "../actions/commonActions";

import { Action } from "../../models/action";
import { CommonState } from "../../models/common";
import { PostsState } from "../../models/posts";
import { POSTS_ACTION_TYPE } from "../actions/postActions";
import { UserState } from "../../models/user";
import { USER_ACTION_TYPE } from "../actions/userActions";

const initialState: UserState = {};

const reducer: Reducer<UserState, Action> = (
  state: UserState = initialState,
  action: Action
): UserState => {
  if (action?.error === true) {
    delete action?.type;
  }
  switch (action.type) {
    case USER_ACTION_TYPE.GET_USER_BY_ID: {
      let payload = state;

      payload = {
        ...state,
        userResponse: action.payload,
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
