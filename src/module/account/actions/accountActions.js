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
} from '../constants/accountConstants';

const fetchAccountRrequest = () => ({
  type: FETCH_ACCOUNT_REQUEST
});

const fetchAccountSuccess = data => ({
  type: FETCH_ACCOUNT_SUCCESS,
  payload: data
});

const fetchAccountFailure = error => ({
  type: FETCH_ACCOUNT_FAILURE,
  payload: error
});

const updateAccountRequest = data => ({
  type: UPDATE_ACCOUNT_REQUEST,
  payload: data
});

const updateAccountSuccess = data => ({
  type: UPDATE_ACCOUNT_SUCCESS,
  payload: data
});

const updateAccountFailure = () => ({
  type: UPDATE_ACCOUNT_FAILURE
});

const removeAccount = () => ({
  type: REMOVE_ACCOUNT
});

const transferStatusRequest = data => ({
  type: TRANSFER_STATUS_REQUEST,
  payload: data
});

const transferStatusSuccess = data => ({
  type: TRANSFER_STATUS_SUCCESS,
  payload: data
});

const transferStatusFailure = () => ({
  type: TRANSFER_STATUS_FAILURE
});

export {
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
};
