import { call, put } from 'redux-saga/effects';

import { resetPassword as resetPasswordService } from '../authServices';
import { resetPasswordSuccess, resetPasswordFailure } from '../authActions';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_INFO } from '../../../config/general';

import serverMessage from '../../../i18n/serverMessage';

function* resetPassword(action) {
  const { payload } = action;
  const { response, error } = yield call(resetPasswordService, payload);
  if (response) {
    const { messages } = response;
    yield put(addSysMessage(serverMessage[messages[0].errorcode], SYS_MESSAGE_TYPE_INFO));
    yield put(resetPasswordSuccess());
  } else if (error) {
    const { messages } = error.data;
    yield put(addSysMessage(serverMessage[messages[0].errorcode], SYS_MESSAGE_TYPE_ERROR));
    yield put(resetPasswordFailure());
  } else {
    yield put(addSysMessage('There is a problem. That is all what we know at the moment', SYS_MESSAGE_TYPE_ERROR));
    yield put(resetPasswordFailure());
  }
}

export default resetPassword;
