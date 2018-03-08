import * as constants from '../accountConstants';

describe('Account Constants', () => {
  it('Should be defined FETCH_ACCOUNT_REQUEST', () => {
    expect(constants.FETCH_ACCOUNT_REQUEST).toBeDefined();
  });
  it('Should be defined FETCH_ACCOUNT_SUCCESS', () => {
    expect(constants.FETCH_ACCOUNT_SUCCESS).toBeDefined();
  });
  it('Should be defined FETCH_ACCOUNT_FAILURE', () => {
    expect(constants.FETCH_ACCOUNT_FAILURE).toBeDefined();
  });
  it('Should be defined UPDATE_ACCOUNT_REQUEST', () => {
    expect(constants.UPDATE_ACCOUNT_REQUEST).toBeDefined();
  });
  it('Should be defined UPDATE_ACCOUNT_SUCCESS', () => {
    expect(constants.UPDATE_ACCOUNT_SUCCESS).toBeDefined();
  });
  it('Should be defined UPDATE_ACCOUNT_FAILURE', () => {
    expect(constants.UPDATE_ACCOUNT_FAILURE).toBeDefined();
  });

  it('Should be defined REMOVE_ACCOUNT', () => {
    expect(constants.REMOVE_ACCOUNT).toBeDefined();
  });
  it('Should be defined TRANSFER_STATUS_REQUEST', () => {
    expect(constants.TRANSFER_STATUS_REQUEST).toBeDefined();
  });
  it('Should be defined TRANSFER_STATUS_SUCCESS', () => {
    expect(constants.TRANSFER_STATUS_SUCCESS).toBeDefined();
  });
  it('Should be defined TRANSFER_STATUS_FAILURE', () => {
    expect(constants.TRANSFER_STATUS_FAILURE).toBeDefined();
  });
});
