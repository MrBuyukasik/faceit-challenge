import {ActionCreator} from '../../models/action';

export enum COMMON_ACTION_TYPE {
  SHOW_LOADING = '@@common/START_LOADING',
  HIDE_LOADING = '@@common/STOP_LOADING',
  RESET_ERROR = '@@common/RESET_ERROR',
  SET_ERROR = '@@common/SET_ERROR',
  SHOW_ERROR = '@@common/SHOW_ERROR',
  SHOW_WARNING = '@@common/SHOW_WARNING',
  RESET_WARNING = '@@common/RESET_WARNING',
}

// @ts-ignore
export const showLoading: ActionCreator = actionType => ({
  type: COMMON_ACTION_TYPE.SHOW_LOADING,
  payload: {actionType},
});

// @ts-ignore
export const hideLoading: ActionCreator = (
  actionType,
  processConfirmationGuard,
) => ({
  type: COMMON_ACTION_TYPE.HIDE_LOADING,
  payload: {actionType, processConfirmationGuard},
});

export const resetError: ActionCreator = () => ({
  type: COMMON_ACTION_TYPE.RESET_ERROR,
});

export const setError: ActionCreator = data => ({
  type: COMMON_ACTION_TYPE.SET_ERROR,
  payload: data,
});
