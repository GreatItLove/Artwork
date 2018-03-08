import { call, put } from 'redux-saga/effects';

import { fetchUsers as fetchUsersService } from '../usersService';
import { fetchUsersSuccess, fetchUsersFailure } from '../usersActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* fetchUsers(action) {
  const { payload } = action;
  const { response, error } = yield call(fetchUsersService, payload);
  if (response) {
    const { data: { users }, pagination } = response;
    yield put(fetchUsersSuccess({ users, pagination }));
  } else {
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(fetchUsersFailure());
  }
}

export default fetchUsers;
