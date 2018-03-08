import { call, put, select } from 'redux-saga/effects';

import { getPagination, getSearchFilter } from '../contactSelectors';
import { contactDownloadPath as contactDownloadPathService } from '../contactServices';
import { contactDownloadPathSuccess, contactDownloadPathFailure } from '../contactActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* contactDownloadPath(action) {
  const pagination = yield select(getPagination);
  const searchFilter = yield select(getSearchFilter);
  const payload = {
    ...searchFilter,
    limit: pagination.recordsPerPage,
    offset: (pagination.currentPage - 1) * pagination.recordsPerPage,
  };
  const { response, error } = yield call(contactDownloadPathService, payload);
  if (response) {
    const { data: { contact } } = response;
    yield put(contactDownloadPathSuccess(contact));
  } else {
    yield put(contactDownloadPathFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default contactDownloadPath;
