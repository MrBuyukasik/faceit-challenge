import { useReducer } from "react";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { CommonState } from "../../models/common";
import { PostsState } from "../../models/posts";
import { UserState } from "../../models/user";

import commonReducer from "../../store/reducers/commonReducer";
import postReducer from "../../store/reducers/postReducers";
import userReducer from "../../store/reducers/userReducer";

export interface RootState {
  common: CommonState;
  posts: PostsState;
  users: UserState;
}

const appReducer = combineReducers<RootState>({
  common: commonReducer,
  posts: postReducer,
  users: userReducer,
});

const rootReducer = (
  state: CombinedState<RootState> | undefined,
  action: AnyAction
) => {
  return appReducer(state, action);
};

export default rootReducer;
