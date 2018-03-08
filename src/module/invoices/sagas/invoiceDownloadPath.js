import { call, put, select } from 'redux-saga/effects';

import { getPagination, getSearchFilter } from '../invoiceSelectors';
import { invoiceDownloadPath as invoiceDownloadPathService } from '../invoiceServices';
import { invoiceDownloadPathSuccess, invoiceDownloadPathFailure } from '../invoiceActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* invoiceDownloadPath(action) {
  const pagination = yield select(getPagination);
  const searchFilter = yield select(getSearchFilter);
  const payload = {
    ...searchFilter,
    limit: pagination.recordsPerPage,
    offset: (pagination.currentPage - 1) * pagination.recordsPerPage,
  };
  const { response, error } = yield call(invoiceDownloadPathService, payload);
  if (response) {
    const { data: { invoice } } = response;
    yield put(invoiceDownloadPathSuccess(invoice));
  } else {
    yield put(invoiceDownloadPathFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default invoiceDownloadPath;
