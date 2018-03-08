import { call, put } from 'redux-saga/effects';

import closeSetActiveDialog from './closeSetActiveDialog';
import { updateUser as updateUserSevice } from '../usersService';
import { updateUserSuccess, updateUserFailure } from '../usersActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_SUCCESS } from '../../../config/general';
import { default as closeEditUserDialogSaga } from './closeEditUserDialog';
import { default as closeResetPasswordDialogSaga } from './closeResetPasswordDialog';

function* updateUser(action) {
  const { payload } = action;
  const { response, error } = yield call(updateUserSevice, payload);
  yield call(closeSetActiveDialog);
  if (response) {
    yield call(closeEditUserDialogSaga);
    yield call(closeResetPasswordDialogSaga);
    const { data: { user } } = response;
    yield put(addSysMessage('Account has updated successfully', SYS_MESSAGE_TYPE_SUCCESS));
    yield put(updateUserSuccess(user));
  } else {
    yield put(addSysMessage(serverMessageHandler(error), SYS_MESSAGE_TYPE_ERROR));
    yield put(updateUserFailure());
  }
}

export default updateUser;
