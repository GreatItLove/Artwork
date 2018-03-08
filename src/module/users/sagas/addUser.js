import { call, put, select } from 'redux-saga/effects';

import { getPagination } from '../usersSelectors';
import { addUser as addUserService } from '../usersService';
import { addUserSuccess, addUserFailure, fetchUsersRequest } from '../usersActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_INFO } from '../../../config/general';
import { default as closeAddUserDialogSaga } from './closeAddUserDialog';

function* addUser(action) {
  const { payload } = action;
  const { response, error } = yield call(addUserService, payload);
  if (response) {
    const { data: { user } } = response;
    yield put(addUserSuccess(user));
    yield call(closeAddUserDialogSaga);

    const pagination = yield select(getPagination);
    //TODO add translate
    yield put(addSysMessage('You have added user successfully', SYS_MESSAGE_TYPE_INFO));
    yield put(fetchUsersRequest({ limit: pagination.recordsPerPage }))
  } else {
    yield put(addUserFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default addUser;
