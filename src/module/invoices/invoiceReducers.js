import updateObject from '../../utility/updateObject';
import * as types from './invoiceConstants';

function invoice(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_INVOICE_REQUEST:
      return updateObject(state, { fetching: true });
    case types.FETCH_INVOICE_SUCCESS:
      return updateObject(state, {
        fetching: false,
        list: payload.invoices,
        pagination: payload.pagination
          ? payload.pagination
          : {
            ...state.pagination,
            totalPages: 0,
            currentPage: 1,
            totalRecordCount: 0,
          },
      });
    case types.FETCH_INVOICE_FAILURE:
      return updateObject(state, {
        fetching: false,
      });

    case types.UPDATE_INVOICE_SEARCH:
      return updateObject(state, {
        searchFilter: payload,
      });

    case types.SWITCH_INVOICE_FILTER:
      return updateObject(state, {
        showingFilter: action.payload,
      });

    case types.CHECK_INVOICE:
      var value = state.selectedCheckBox.slice();
      value.push(payload);
      return updateObject(state, { selectedCheckBox: value });
    case types.UNCHECK_INVOICE:
      return updateObject(state, { selectedCheckBox: state.selectedCheckBox.filter(item => item !== payload) })
    case types.CLEAR_CHECKED_INVOICE:
      return updateObject(state, { selectedCheckBox: [] });

    case types.BULK_INVOICE_EDIT_REQUEST:
      return updateObject(state, { fetching: true });
    case types.BULK_INVOICE_EDIT_SUCCESS:
    case types.BULK_INVOICE_EDIT_FAILURE:
      return updateObject(state, { fetching: false });

    case types.INVOICE_DOWNLOAD_PATH_REQUEST:
      return updateObject(state, { fetchingDownloadpath: true });
    case types.INVOICE_DOWNLOAD_PATH_SUCCESS:
      return updateObject(state, {
        fetchingDownloadpath: false,
        downloadPath: payload.downloadFilePath,
      });
    case types.INVOICE_DOWNLOAD_PATH_FAILURE:
      return updateObject(state, { fetchingDownloadpath: false });

    case types.OPEN_INVOICE_DOWNLOAD_DIALOG:
      return updateObject(state, { downloading: true });
    case types.CLOSE_INVOICE_DOWNLOAD_DIALOG:
      return updateObject(state, { downloading: false });
    default:
      return state;
  }
}

export default invoice;
