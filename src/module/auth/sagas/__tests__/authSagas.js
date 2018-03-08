import { takeLatest } from 'redux-saga/effects';

import { LOGIN_REQUEST, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, LOGOUT } from '../../authConstants';
import watchAuth from '../authSagas';
import logIn from '../loginSaga';
import forgotPassword from '../forgotPasswordSaga';
import resetPassword from '../resetPasswordSaga';
import logout from '../logoutSaga';

describe('Auth Saga', () => {
  const generator = watchAuth();
  it('Should return login request', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(LOGIN_REQUEST, logIn));
  });
  it('Should return forget password request', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword));
  });
  it('Should return reset password request', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(RESET_PASSWORD_REQUEST, resetPassword));
  });
  it('Should return logout', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(LOGOUT, logout));
  });
});
