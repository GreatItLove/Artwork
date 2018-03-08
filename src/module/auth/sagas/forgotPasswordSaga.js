import { call, put } from 'redux-saga/effects';

import { forgotPassword as forgotPasswordService } from '../authServices';
import { forgotPasswordSuccess, forgotPasswordFailure } from '../authActions';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_INFO } from '../../../config/general';

import serverMessageHandler from '../../../i18n/serverMessageHandler';

function* forgotPassword(action) {
  const { response, error } = yield call(forgotPasswordService, action.payload);
  if (response) {
    yield put(addSysMessage(serverMessageHandler(response), SYS_MESSAGE_TYPE_INFO));
    yield put(forgotPasswordSuccess());
  } else if (error) {
    const { data } = error;
    yield put(addSysMessage(serverMessageHandler(data), SYS_MESSAGE_TYPE_ERROR));
    yield put(forgotPasswordFailure());
  } else {
    yield put(addSysMessage('There is a problem. That is all what we know at the moment', SYS_MESSAGE_TYPE_ERROR));
    yield put(forgotPasswordFailure());
  }
}

export default forgotPassword;
