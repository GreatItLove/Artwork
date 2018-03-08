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
} from '../authConstants';

import {
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
} from '../authActions';

describe('Auth Actions', () => {
  describe('Login', () => {
    describe('Login Request', () => {
      it('Should return proper action', () => {
        const data = {
          username: 'test@ptt.yu',
          password: '123'
        };
        const action = loginRequest(data);
        expect(action).toEqual({
          type: LOGIN_REQUEST,
          payload: data
        });
      });
    });
    describe('Login Success', () => {
      it('Should return proper action', () => {
        const userId = 1234;
        const action = loginSuccess(userId);
        expect(action).toEqual({
          type: LOGIN_SUCCESS,
          payload: userId
        });
      });
    });
    describe('Login Failure', () => {
      it('Should return proper action', () => {
        const action = loginFailure();
        expect(action).toEqual({ type: LOGIN_FAILURE });
      });
    });
  });

  describe('Forgot Password', () => {
    describe('Forgot Password Request', () => {
      it('Should return proper action for forget password request', () => {
        const data = { email: 'test@email.com' };
        const action = forgotPasswordRequest(data);
        expect(action).toEqual({
          type: FORGOT_PASSWORD_REQUEST,
          payload: data
        });
      });
    });
    describe('Forgot Password Success', () => {
      it('Should create action for forgot password success', () => {
        const action = forgotPasswordSuccess();
        expect(action).toEqual({
          type: FORGOT_PASSWORD_SUCCESS
        });
      });
    });
    describe('Forgot Password Failure', () => {
      it('Should create action for forgot password failure', () => {
        const action = forgotPasswordFailure();
        expect(action).toEqual({
          type: FORGOT_PASSWORD_FAILURE
        });
      });
    });
  });

  describe('Reset Password', () => {
    describe('Reset Password request', () => {
      it('Should create action for reset password request', () => {
        const data = { uuid: '5645465', password: '64556465' };
        const action = resetPasswordRequest(data);
        expect(action).toEqual({
          type: RESET_PASSWORD_REQUEST,
          payload: data
        });
      });
    });
    describe('Reset Password Success', () => {
      it('Should create action for reset password success', () => {
        const action = resetPasswordSuccess();
        expect(action).toEqual({
          type: RESET_PASSWORD_SUCCESS
        });
      });
    });
    describe('Reset Password Failure', () => {
      it('Should create action for reset password failure', () => {
        const action = resetPasswordFailure();
        expect(action).toEqual({
          type: RESET_PASSWORD_FAILURE
        });
      });
    });
  });

  describe('Logout', () => {
    it('Should return proper action', () => {
      expect(logout()).toEqual({ type: LOGOUT });
    });
  });
});
