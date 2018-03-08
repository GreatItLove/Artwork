import { call, put } from 'redux-saga/effects';

import { deleteUser as deleteUserService } from '../usersService';
import { deleteUserSuccess, deleteUserFailure } from '../usersActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_INFO } from '../../../config/general';

function* deleteUser(action) {
  const { payload } = action;
  const { response, error } = yield call(deleteUserService, payload);
  if (response) {
    yield put(deleteUserSuccess(payload));
    const message = serverMessageHandler(response);
    yield put(addSysMessage(message, SYS_MESSAGE_TYPE_INFO));
  } else {
    yield put(deleteUserFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default deleteUser;
