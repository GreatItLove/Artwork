import { call, put, select } from 'redux-saga/effects';

import { getPagination, getSearchFilter } from '../artistsSelectors';
import { artistDownloadPath as artistDownloadPathService } from '../artistsService';
import { artistDownloadPathSuccess, artistDownloadPathFailure } from '../artistsActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* artistsDownloadPath(action) {
  const pagination = yield select(getPagination);
  const searchFilter = yield select(getSearchFilter);
  const payload = {
    ...searchFilter,
    limit: pagination.recordsPerPage,
    offset: (pagination.currentPage - 1) * pagination.recordsPerPage,
  };
  const { response, error } = yield call(artistDownloadPathService, payload);
  if (response) {
    const { data: { artist } } = response;
    yield put(artistDownloadPathSuccess(artist));
  } else {
    yield put(artistDownloadPathFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default artistsDownloadPath;
