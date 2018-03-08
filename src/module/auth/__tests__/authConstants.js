import * as authConst from '../authConstants';

describe('Auth Constants', () => {
  it('Should be defined LOGIN_REQUEST', () => {
    expect(authConst.LOGIN_REQUEST).toBeDefined();
  });
  it('Should be defined LOGIN_SUCCESS', () => {
    expect(authConst.LOGIN_SUCCESS).toBeDefined();
  });
  it('Should be defined LOGIN_FAILURE', () => {
    expect(authConst.LOGIN_FAILURE).toBeDefined();
  });
  it('Should be defined FORGOT_PASSWORD_REQUEST', () => {
    expect(authConst.FORGOT_PASSWORD_REQUEST).toBeDefined();
  });
  it('Should be defined FORGOT_PASSWORD_FAILURE', () => {
    expect(authConst.FORGOT_PASSWORD_FAILURE).toBeDefined();
  });
  it('Should be defined FORGOT_PASSWORD_SUCCESS', () => {
    expect(authConst.FORGOT_PASSWORD_SUCCESS).toBeDefined();
  });
  it('Should be defined RESET_PASSWORD_REQUEST', () => {
    expect(authConst.RESET_PASSWORD_REQUEST).toBeDefined();
  });
  it('Should be defined RESET_PASSWORD_FAILURE', () => {
    expect(authConst.RESET_PASSWORD_FAILURE).toBeDefined();
  });
  it('Should be defined RESET_PASSWORD_SUCCESS', () => {
    expect(authConst.RESET_PASSWORD_SUCCESS).toBeDefined();
  });
  it('Should be defined LOGOUT', () => {
    expect(authConst.LOGOUT).toBeDefined();
  });
});
