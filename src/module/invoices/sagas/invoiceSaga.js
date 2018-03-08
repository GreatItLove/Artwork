import { takeLatest } from 'redux-saga/effects';

import {
  FETCH_INVOICE_REQUEST,
  BULK_INVOICE_EDIT_REQUEST,
  INVOICE_DOWNLOAD_PATH_REQUEST,
} from '../invoiceConstants';

import fetchInvoice from './fetchInvoice';
import bulkInvoiceEditRequest from './bulkInvoiceEditRequest';
import invoiceDownloadPath from './invoiceDownloadPath';

function* invoiceSaga() {
  yield takeLatest(FETCH_INVOICE_REQUEST, fetchInvoice);
  yield takeLatest(BULK_INVOICE_EDIT_REQUEST, bulkInvoiceEditRequest);
  yield takeLatest(INVOICE_DOWNLOAD_PATH_REQUEST, invoiceDownloadPath);
}

export default invoiceSaga;
