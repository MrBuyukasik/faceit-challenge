import { Reducer } from "redux";

import { COMMON_ACTION_TYPE } from "../actions/commonActions";

import { Action } from "../../models/action";
import { CommonState } from "../../models/common";

const initialState: CommonState = {
  loading: {},
  requestCompleted: true,
};

const reducer: Reducer<CommonState, Action> = (
  state: CommonState = initialState,
  action: Action
): CommonState => {
  if (action?.error === true) {
    delete action?.type;
  }
  switch (action.type) {
    case COMMON_ACTION_TYPE.SHOW_LOADING: {
      let payload = state;

      payload = {
        ...state,
        loading: { ...state.loading, [action.payload.actionType]: true },
      };

      return payload;
    }

    case COMMON_ACTION_TYPE.HIDE_LOADING: {
      let payload = state;

      payload = {
        ...state,
        loading: { ...state.loading, [action.payload.actionType]: false },
      };

      return payload;
    }

    // case COMMON_ACTION_TYPE.SHOW_ERROR: {
    //   return {
    //     ...state,
    //     error: action.payload.error,
    //     onCloseCallback: action.payload.onCloseCallback,
    //   };
    // }
    // case COMMON_ACTION_TYPE.RESET_ERROR:
    //   return {
    //     ...state,
    //     error: undefined,
    //     onCloseCallback: undefined,
    //   };

    // case COMMON_ACTION_TYPE.SET_ERROR:
    //   const error = { message: action.payload, name: "" };
    //   return {
    //     ...state,
    //     error,
    //   };

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
