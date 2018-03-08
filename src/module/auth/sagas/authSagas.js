import { takeLatest } from 'redux-saga/effects';

import { LOGIN_REQUEST, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, LOGOUT } from '../authConstants';

import logIn from './loginSaga';
import forgotPassword from './forgotPasswordSaga';
import resetPassword from './resetPasswordSaga';
import logout from './logoutSaga';

export default function* watchAuth() {
  yield takeLatest(LOGIN_REQUEST, logIn);
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword);
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPassword);
  yield takeLatest(LOGOUT, logout);
}
