import { call, put, select } from 'redux-saga/effects';

import { getPagination, getSearchFilter } from '../usersSelectors';
import { usersDownloadPath as usersDownloadPathService } from '../usersService';
import { usersDownloadPathSuccess, usersDownloadPathFailure } from '../usersActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* usersDownloadPath(action) {
  const pagination = yield select(getPagination);
  const searchFilter = yield select(getSearchFilter);
  const payload = {
    ...searchFilter,
    limit: pagination.recordsPerPage,
    offset: (pagination.currentPage - 1) * pagination.recordsPerPage,
  };
  const { response, error } = yield call(usersDownloadPathService, payload);
  if (response) {
    const { data: { users } } = response;
    yield put(usersDownloadPathSuccess(users));
  } else {
    yield put(usersDownloadPathFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default usersDownloadPath;
