import { ActionCreator } from "../../models/action";
import { Location } from "history";
import { userApi } from "../../apis";

export enum USER_ACTION_TYPE {
  GET_USER_BY_ID = "@@users/GET_USER_BY_ID",
}

export const getUserById: ActionCreator = (userId: string) => ({
  type: USER_ACTION_TYPE.GET_USER_BY_ID,
  payload: userApi.getUserById(userId),
});
