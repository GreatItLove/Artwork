import * as usersConstants from '../usersConstants';

describe('Users Constants', () => {
  it('Should be defined FETCH_USERS_REQUEST', () => {
    expect(usersConstants.FETCH_USERS_REQUEST).toBeDefined();
  });
  it('Should be defined FETCH_USERS_SUCCESS', () => {
    expect(usersConstants.FETCH_USERS_SUCCESS).toBeDefined();
  });
  it('Should be defined FETCH_USER_FAILURE', () => {
    expect(usersConstants.FETCH_USERS_FAILURE).toBeDefined();
  });
  it('Should be defined DELETE_USER_REQUEST', () => {
    expect(usersConstants.DELETE_USER_REQUEST).toBeDefined();
  });
  it('Should be defined DELETE_USERS_SUCCESS', () => {
    expect(usersConstants.DELETE_USER_SUCCESS).toBeDefined();
  });
  it('Should be defined DELETE_USERS_FAILURE', () => {
    expect(usersConstants.DELETE_USER_FAILURE).toBeDefined();
  });
  it('Should be defined OPEN_USER_DELETE_DIALOG', () => {
    expect(usersConstants.OPEN_USER_DELETE_DIALOG).toBeDefined();
  });
  it('Should be defined CLOSE_USER_DELETE_DIALOG', () => {
    expect(usersConstants.CLOSE_USER_DELETE_DIALOG).toBeDefined();
  });

  it('Should be defined OPEN_USER_ADD_DIALOG', () => {
    expect(usersConstants.OPEN_USER_ADD_DIALOG).toBeDefined();
  });
  it('Should be defined CLOSE_USER_ADD_DIALOG', () => {
    expect(usersConstants.CLOSE_USER_ADD_DIALOG).toBeDefined();
  });

  it('Should be defined ADD_USER_REQUEST', () => {
    expect(usersConstants.ADD_USER_REQUEST).toBeDefined();
  });
  it('Should be defined ADD_USERS_SUCCESS', () => {
    expect(usersConstants.ADD_USER_SUCCESS).toBeDefined();
  });
  it('Should be defined ADD_USERS_FAILURE', () => {
    expect(usersConstants.ADD_USER_FAILURE).toBeDefined();
  });
  it('Should be defined UPDATE_USER_REQUEST', () => {
    expect(usersConstants.UPDATE_USER_REQUEST).toBeDefined();
  });
  it('Should be defined UPDATE_USERS_SUCCESS', () => {
    expect(usersConstants.UPDATE_USER_SUCCESS).toBeDefined();
  });
  it('Should be defined ADD_USERS_FAILURE', () => {
    expect(usersConstants.UPDATE_USER_FAILURE).toBeDefined();
  });
  it('Should be defined OPEN_USER_SUSPEND_DIALOG', () => {
    expect(usersConstants.OPEN_USER_SUSPEND_DIALOG).toBeDefined();
  });
  it('Should be defined CLOSE_USER_SUSPEND_DIALOG', () => {
    expect(usersConstants.CLOSE_USER_SUSPEND_DIALOG).toBeDefined();
  });

  it('Should be defined OPEN_USER_EDIT_DIALOG', () => {
    expect(usersConstants.OPEN_USER_EDIT_DIALOG).toBeDefined();
  });
  it('Should be defined CLOSE_USER_EDIT_DIALOG', () => {
    expect(usersConstants.CLOSE_USER_EDIT_DIALOG).toBeDefined();
  });
  it('Should be defined OPEN_USER_RESET_PASSWORD_DIALOG', () => {
    expect(usersConstants.OPEN_USER_RESET_PASSWORD_DIALOG).toBeDefined();
  });
  it('Should be defined CLOSE_USER_RESET_PASSWORD_DIALOG', () => {
    expect(usersConstants.CLOSE_USER_RESET_PASSWORD_DIALOG).toBeDefined();
  });
  it('Should be defined UPDATE_USERS_SEARCH', () => {
    expect(usersConstants.UPDATE_USERS_SEARCH).toBeDefined();
  });
  it('Should be defined SWITCH_USERS_FILTER', () => {
    expect(usersConstants.SWITCH_USERS_FILTER).toBeDefined();
  });
});
