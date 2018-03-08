import * as InvoiceConst from './invoiceConstants';

export const fetchInvoiceRequest = data => ({
  type: InvoiceConst.FETCH_INVOICE_REQUEST,
  payload: data,
});

export const fetchInvoiceSuccess = data => ({
  type: InvoiceConst.FETCH_INVOICE_SUCCESS,
  payload: data,
});

export const fetchInvoiceFailure = data => ({
  type: InvoiceConst.FETCH_INVOICE_FAILURE,
  payload: data,
});

export const updateSearchFilter = data => ({
  type: InvoiceConst.UPDATE_INVOICE_SEARCH,
  payload: data,
});

export const switchInvoiceFilter = data => ({
  type: InvoiceConst.SWITCH_INVOICE_FILTER,
  payload: data,
});

export const checkInvoice = data => ({
  type: InvoiceConst.CHECK_INVOICE,
  payload: data,
});

export const uncheckInvoice = data => ({
  type: InvoiceConst.UNCHECK_INVOICE,
  payload: data,
});

export const bulkInvoiceEditRequest = data => ({
  type: InvoiceConst.BULK_INVOICE_EDIT_REQUEST,
  payload: data,
});

export const bulkInvoiceEditSuccess = () => ({
  type: InvoiceConst.BULK_INVOICE_EDIT_SUCCESS,
});

export const bulkInvoiceEditFailure = () => ({
  type: InvoiceConst.BULK_INVOICE_EDIT_FAILURE,
});

export const clearCheckedInvoice = () => ({
  type: InvoiceConst.CLEAR_CHECKED_INVOICE,
});

export const invoiceDownloadPathRequest = () => ({
  type: InvoiceConst.INVOICE_DOWNLOAD_PATH_REQUEST,
});

export const invoiceDownloadPathSuccess = data => ({
  type: InvoiceConst.INVOICE_DOWNLOAD_PATH_SUCCESS,
  payload: data
});

export const invoiceDownloadPathFailure = () => ({
  type: InvoiceConst.INVOICE_DOWNLOAD_PATH_FAILURE,
});

export const openInvoiceDownloadDialog = () => ({
  type: InvoiceConst.OPEN_INVOICE_DOWNLOAD_DIALOG,
});

export const closeInvoiceDownloadDialog = () => ({
  type: InvoiceConst.CLOSE_INVOICE_DOWNLOAD_DIALOG,
});
