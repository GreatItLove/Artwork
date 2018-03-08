import authReducers from '../authReducers';
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

describe('Auth Reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      startPage: null,
      token: false
    };
  });
  describe('Login', () => {
    it('Should has proper state after loginRequest action', () => {
      const newState = authReducers(state, loginRequest());
      expect(newState).toEqual(
        expect.objectContaining({
          loading: true,
          startPage: null,
          token: false
        })
      );
    });
    it('Should has proper state after loginSuccess state', () => {
      const data = {
        startPage: '/somepage',
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJjdXN0b21lcmlkIjoxODU5LCJpc3MiOiJodHRwczovL215YXBpIiwic3ViIjo2MDY0LCJleHAiOjE1MDQxMDQ1MTl9.YLO-lC6dDXa7s7P6dq8FDXSReNGmK8ad5JhvmYhHmV76j4pPr02ntvgfw8Sh2BypExRJ8PjvSsVc_ibtS13mjA'
      };
      const newState = authReducers(state, loginSuccess(data));
      const expectedState = {
        ...state,
        ...data,
        ...{ loading: false }
      };
      expect(newState).toEqual(expectedState);
    });
    it('Should has proper state after loginFailure action ', () => {
      const prevState = { ...state, ...{ loading: true } };
      const newState = authReducers(prevState, loginFailure('err'));
      expect(newState).toEqual({
        loading: false,
        startPage: null,
        token: false
      });
    });
  });
  describe('Forgot password', () => {
    it('Should has state after forgot password request', () => {
      const data = { email: 'someemail@ptt.yu' };
      const action = forgotPasswordRequest(data);
      const newState = authReducers(state, action);
      const expextedState = { ...state, ...{ loading: true } };
      expect(newState).toEqual(expextedState);
    });
    it('Should has proper state after forgot password success', () => {
      const oldState = { ...state, ...{ loading: true } };
      const action = forgotPasswordSuccess();
      const newState = authReducers(oldState, action);
      expect(newState).toEqual(state);
    });
    it('Should has proper state after forgot password failure', () => {
      const oldState = { ...state, ...{ loading: true } };
      const action = forgotPasswordFailure();
      const newState = authReducers(oldState, action);
      expect(newState).toEqual(state);
    });
  });

  describe('Reset Password', () => {
    it('Should has proper state after reset password request', () => {
      const action = resetPasswordRequest({
        uuid: '4566546',
        password: '4654654'
      });
      const newState = authReducers(state, action);
      const expectedState = { ...state, ...{ loading: true } };
      expect(newState).toEqual(expectedState);
    });
    it('Should has proper state after reset password success', () => {
      const oldState = { ...state, ...{ loading: true } };
      const newState = authReducers(oldState, resetPasswordSuccess());
      expect(newState).toEqual(state);
    });
    it('Should has proper state after reset password failure', () => {
      const oldState = { ...state, ...{ loading: true } };
      const newState = authReducers(oldState, resetPasswordFailure());
      expect(newState).toEqual(state);
    });
  });

  describe('Logout', () => {
    it('Should has proper state after logout action', () => {
      const prevState = {
        ...state,
        ...{
          startPage: '/somepage',
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJjdXN0b21lcmlkIjoxODU5LCJpc3MiOiJodHRwczovL215YXBpIiwic3ViIjo2MDY0LCJleHAiOjE1MDQxMDQ1MTl9.YLO-lC6dDXa7s7P6dq8FDXSReNGmK8ad5JhvmYhHmV76j4pPr02ntvgfw8Sh2BypExRJ8PjvSsVc_ibtS13mjA'
        }
      };
      const newState = authReducers(prevState, logout());
      expect(newState).toEqual(state);
    });
  });
});
