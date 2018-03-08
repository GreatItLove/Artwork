import { call, put, select } from 'redux-saga/effects';

import { getPagination, getSearchFilter } from '../invoiceSelectors';
import { bulkInvoiceEditRequest as bulkInvoiceEditRequestService } from '../invoiceServices';
import {
  bulkInvoiceEditSuccess,
  bulkInvoiceEditFailure,
  fetchInvoiceRequest,
  updateSearchFilter,
  clearCheckedInvoice,
} from '../invoiceActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* bulkInvoiceEditRequest(action) {
  const { payload } = action;
  const { response, error } = yield call(bulkInvoiceEditRequestService, payload);
  if (response) {
    const pagination = yield select(getPagination);
    const searchFilter = yield select(getSearchFilter);
    const payload = {
      ...searchFilter,
      limit: pagination.recordsPerPage,
      offset: (pagination.currentPage - 1) * pagination.recordsPerPage,
    };
    yield put(fetchInvoiceRequest(payload));
    if (payload.delete) {
      yield put(clearCheckedInvoice());
    }
    yield put(bulkInvoiceEditSuccess());
    yield put(updateSearchFilter({}));
  } else {
    yield put(bulkInvoiceEditFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default bulkInvoiceEditRequest;
