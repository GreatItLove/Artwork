import { call, put } from 'redux-saga/effects';

import { fetchInvoice as fetchInvoiceService } from '../invoiceServices';
import { fetchInvoiceSuccess, fetchInvoiceFailure } from '../invoiceActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* fetchInvoice(action) {
  const { payload } = action;
  const { response, error } = yield call(fetchInvoiceService, payload);
  if (response) {
    const { data: { invoices }, pagination } = response;
    yield put(fetchInvoiceSuccess({ invoices, pagination }));
  } else {
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(fetchInvoiceFailure());
  }
}

export default fetchInvoice;
