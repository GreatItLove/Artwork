import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  LOGOUT
} from './authConstants';

const loginRequest = data => ({
  type: LOGIN_REQUEST,
  payload: data
});

const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

const loginFailure = err => ({
  type: LOGIN_FAILURE
});

const forgotPasswordRequest = data => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload: data
});

const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS
});

const forgotPasswordFailure = () => ({
  type: FORGOT_PASSWORD_FAILURE
});
const resetPasswordRequest = data => ({
  type: RESET_PASSWORD_REQUEST,
  payload: data
});

const resetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS
});

const resetPasswordFailure = () => ({
  type: RESET_PASSWORD_FAILURE
});

const logout = () => ({
  type: LOGOUT
});

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
  logout
};
