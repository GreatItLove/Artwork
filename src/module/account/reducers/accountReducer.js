import updateObject from '../../../utility/updateObject';

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

function customer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ACCOUNT_REQUEST:
    case UPDATE_ACCOUNT_REQUEST:
      return updateObject(state, { loadingData: true });
    case FETCH_ACCOUNT_SUCCESS:
      return updateObject(state, {
        loadingData: false,
        isFetchedData: true,
        ...payload
      });
    case FETCH_ACCOUNT_FAILURE:
      return updateObject(state, {
        loadingData: false,
        isFetchedData: true,
        loadingError: payload
      });
    case UPDATE_ACCOUNT_SUCCESS:
      return updateObject(state, { loadingData: false, ...payload });
    case UPDATE_ACCOUNT_FAILURE:
      return updateObject(state, { loadingData: false });
    case REMOVE_ACCOUNT:
      return updateObject(state, {
        active: null,
        email: false,
        fullName: false,
        userId: false,
        userType: false,
        loadingData: false,
        loadingError: false,
        isFetchedData: false
      });
    case TRANSFER_STATUS_REQUEST:
      return updateObject(state, { isTransfer: true });
    case TRANSFER_STATUS_SUCCESS:
      return updateObject(state, { isTransfer: false });
    case TRANSFER_STATUS_FAILURE:
      return updateObject(state, { isTransfer: false });
    default:
      return state;
  }
}

export default customer;
