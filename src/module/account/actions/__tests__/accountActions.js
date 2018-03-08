import {
  fetchAccountRrequest,
  fetchAccountSuccess,
  fetchAccountFailure,
  updateAccountRequest,
  updateAccountSuccess,
  updateAccountFailure,
  removeAccount,
  transferStatusRequest,
  transferStatusSuccess,
  transferStatusFailure
} from '../accountActions';
import {
  FETCH_ACCOUNT_REQUEST,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  UPDATE_ACCOUNT_REQUEST,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE,
  REMOVE_ACCOUNT,
  TRANSFER_STATUS_REQUEST,
  TRANSFER_STATUS_SUCCESS,
  TRANSFER_STATUS_FAILURE
} from '../../constants/accountConstants';

describe('Account actions', () => {
  const data = {
    property1: 'some property 1',
    property2: 'some property 2'
  };
  it('Should emit action for request', () => {
    const action = fetchAccountRrequest();
    expect(action).toEqual({
      type: FETCH_ACCOUNT_REQUEST
    });
  });
  it('Should create action for success request', () => {
    const action = fetchAccountSuccess(data);
    expect(action).toEqual({
      type: FETCH_ACCOUNT_SUCCESS,
      payload: data
    });
  });
  it('Should create action for failure request ', () => {
    const err = 'some error';
    const action = fetchAccountFailure(err);
    expect(action).toEqual({
      type: FETCH_ACCOUNT_FAILURE,
      payload: err
    });
  });

  it('Should create action for update request', () => {
    const data = { fullName: 'Some name' };
    const action = updateAccountRequest(data);
    expect(action).toEqual({
      type: UPDATE_ACCOUNT_REQUEST,
      payload: data
    });
  });

  it('Should create action for success account update', () => {
    const action = updateAccountSuccess(data);
    expect(action).toEqual({
      type: UPDATE_ACCOUNT_SUCCESS,
      payload: data
    });
  });

  it('Should create action for update action Failure', () => {
    const action = updateAccountFailure();
    expect(action).toEqual({
      type: UPDATE_ACCOUNT_FAILURE
    });
  });

  it('Should create action for remove account', () => {
    const action = removeAccount();
    expect(action).toEqual({
      type: REMOVE_ACCOUNT
    });
  });
  it('Should create action for transfer status request', () => {
    const data = { userId: 6842 };
    const action = transferStatusRequest(data);
    expect(action).toEqual({
      type: TRANSFER_STATUS_REQUEST,
      payload: data
    });
  });

  it('Should create action for success transfer status', () => {
    const action = transferStatusSuccess(data);
    expect(action).toEqual({
      type: TRANSFER_STATUS_SUCCESS,
      payload: data
    });
  });

  it('Should create action for transfer status Failure', () => {
    const action = transferStatusFailure();
    expect(action).toEqual({
      type: TRANSFER_STATUS_FAILURE
    });
  });
});
