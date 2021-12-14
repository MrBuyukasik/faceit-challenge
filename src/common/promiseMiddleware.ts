import {isFSA} from 'flux-standard-action';

import {showLoading, hideLoading} from '../store/actions/commonActions';
// import { AUTH_ACTION_TYPE } from '../store/actions/authActions';

export const OTP_METHOD = {
  MOBILE: 'MOBILE',
  MOBILE_SEAL: 'MOBILE_SEAL',
  SMS: 'SMS',
};

export const HTTP_STATUS = {
  TOO_MANY_REQUEST: 429,
  LOOP_DETECTED: 508,
};

const HTTP_STATUS_WITH_NO_ERROR_LIST = [
  HTTP_STATUS.TOO_MANY_REQUEST,
  HTTP_STATUS.LOOP_DETECTED,
];
const NO_ERROR_SERVICE_LIST = ['@@auth/GET_USER_PROFILES'];
const isPromise = (val: any) => val && typeof val.then === 'function';

// @ts-ignore
export default ({dispatch}) =>
  next =>
  async action => {
    if (!isFSA(action)) {
      if (isPromise(action)) {
        return dispatch(await action);
      }

      return next(action);
    }

    if (!isPromise(action.payload)) {
      return next(action);
    }

    dispatch(showLoading(action.type));

    if (!action.payload) {
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await action.payload;
      let processConfirmationGuard = false;

      if (response?.processConfirmationGuard) {
        if (response?.otpMethod !== OTP_METHOD.SMS) {
          processConfirmationGuard = true;
        }
      }

      dispatch(hideLoading(action.type, processConfirmationGuard));

      if (response?.code) {
        return dispatch({
          ...action,
          payload: response,
          error: true,
          warning: false,
        });
      }

      return dispatch({
        ...action,
        payload: response,
        error: false,
        warning: !!response.processConfirmationGuard,
      });
    } catch (response) {
      dispatch(hideLoading(action.type));

      return dispatch({
        ...action,
        payload: response.error,
        error: true,
        warning: false,
      });
    }
  };
