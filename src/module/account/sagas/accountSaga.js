import { takeLatest, call, put } from 'redux-saga/effects';

import { FETCH_ACCOUNT_REQUEST, UPDATE_ACCOUNT_REQUEST, TRANSFER_STATUS_REQUEST } from '../constants/accountConstants';
import {
  fetchAccount as fetchAccountService,
  updateAccount as updateAccountService,
  transferStatus as transferStatusService
} from '../services/accountService';
import {
  fetchAccountSuccess,
  fetchAccountFailure,
  updateAccountSuccess,
  updateAccountFailure,
  transferStatusSuccess,
  transferStatusFailure
} from '../actions/accountActions';
import { logout } from '../../auth/authActions';
import { addSettings } from '../actions/settingsActions';
import { addCustomer } from '../actions/customerActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_SUCCESS } from '../../../config/general';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { fetchAccountRrequest } from '../actions/accountActions';

export function* fetchAccount() {
  const { response, error } = yield call(fetchAccountService);
  if (response) {
    const { data: { user } } = response;
    const { settings, customer, ...account } = user;
    yield put(addSettings(settings));
    yield put(addCustomer(customer));
    yield put(fetchAccountSuccess(account));
  } else {
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(fetchAccountFailure(errorMessage));
  }
}

export function* updateAccount(action) {
  const { payload } = action;
  const { response, error } = yield call(updateAccountService, payload);
  if (response) {
    const { data: { user } } = response;
    yield put(addSysMessage('Your account has updated successfully', SYS_MESSAGE_TYPE_SUCCESS));
    yield put(updateAccountSuccess(user));
  } else {
    yield put(addSysMessage(serverMessageHandler(error), SYS_MESSAGE_TYPE_ERROR));
    yield put(updateAccountFailure());
  }
}

export function* transferStatus(action) {
  const { payload } = action;
  const { response, error } = yield call(transferStatusService, payload);
  if (response) {
    yield put(addSysMessage('Account status transferred successfully', SYS_MESSAGE_TYPE_SUCCESS));
    yield put(transferStatusSuccess());
    yield put(fetchAccountRrequest());
    yield put(logout());
  } else if (error) {
    yield put(addSysMessage(serverMessageHandler(error), SYS_MESSAGE_TYPE_ERROR));
    yield put(transferStatusFailure());
  }
}

function* accountWatch() {
  yield takeLatest(FETCH_ACCOUNT_REQUEST, fetchAccount);
  yield takeLatest(UPDATE_ACCOUNT_REQUEST, updateAccount);
  yield takeLatest(TRANSFER_STATUS_REQUEST, transferStatus);
}

export default accountWatch;
