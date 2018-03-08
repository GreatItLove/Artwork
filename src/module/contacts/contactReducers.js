import _capitalize from 'lodash/capitalize';

import updateObject from '../../utility/updateObject';
import * as types from './contactConstants';

function contact(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_CONTACT_REQUEST:
      return updateObject(state, { fetching: true });
    case types.FETCH_CONTACT_SUCCESS:
      return updateObject(state, {
        fetching: false,
        list: payload.contacts,
        pagination: payload.pagination
          ? payload.pagination
          : {
            ...state.pagination,
            totalRecordCount: 0,
          },
      });
    case types.FETCH_CONTACT_FAILURE:
      return updateObject(state, {
        fetching: false,
      });
    case types.OPEN_CONTACT_ADD_DIALOG:
      return updateObject(state, {
        adding: true,
      });
    case types.CLOSE_CONTACT_ADD_DIALOG:
      return updateObject(state, {
        adding: false,
      });
    case types.UPDATE_CONTACTS_SEARCH:
      return updateObject(state, {
        searchFilter: payload,
      });
    case types.SWITCH_CONTACTS_FILTER:
      return updateObject(state, {
        showingFilter: action.payload,
      });
    case types.FETCH_LOOKUP_REQUEST:
      let requestKey = `fetching${_capitalize(payload)}`;
      return updateObject(state, {
        [requestKey]: true,
      });
    case types.FETCH_LOOKUP_SUCCESS:
      let successKey = `fetching${_capitalize(payload.key)}`;
      return updateObject(state, {
        [successKey]: false,
        [payload.key]: payload.data,
      });
    case types.FETCH_LOOKUP_FAILURE:
      let failureKey = `fetching${_capitalize(payload.key)}`;
      return updateObject(state, {
        [failureKey]: false,
      });
    case types.CHECK_CONTACTS:
      var value = state.selectedCheckBox.slice();
      value.push(payload);
      return updateObject(state, { selectedCheckBox: value })
    case types.UNCHECK_CONTACTS:
      return updateObject(state, { selectedCheckBox: state.selectedCheckBox.filter(item => item !== payload) })
    case types.CLEAR_CHECKED_CONTACTS:
      return updateObject(state, { selectedCheckBox: [] });
    case types.OPEN_BULKUPDATE_CONTACT_DIALOG:
      return updateObject(state, {
        updating: true,
        bulkUpdateDialogData: payload,
      });
    case types.CLOSE_BULKUPDATE_CONTACT_DIALOG:
      return updateObject(state, {
        updating: false,
      });
    case types.BULK_CONTACT_EDIT_REQUEST:
      return updateObject(state, { fetching: true })

    case types.BULK_CONTACT_EDIT_SUCCESS:
    case types.BULK_CONTACT_EDIT_FAILURE:
      return updateObject(state, { fetching: false })
    case types.CONTACT_DOWNLOAD_PATH_REQUEST:
      return updateObject(state, { fetchingDownloadpath: true })
    case types.CONTACT_DOWNLOAD_PATH_SUCCESS:
      return updateObject(state, {
        fetchingDownloadpath: false,
        downloadPath: payload.downloadFilePath,
      });
    case types.CONTACT_DOWNLOAD_PATH_FAILURE:
      return updateObject(state, { fetchingDownloadpath: false })
    case types.OPEN_CONTACT_DOWNLOAD_DIALOG:
      return updateObject(state, { downloading: true })
    case types.CLOSE_CONTACT_DOWNLOAD_DIALOG:
      return updateObject(state, { downloading: false })
    case types.ADD_CONTACT_REQUEST:
      return updateObject(state, {
        loading: true,
      });
    case types.ADD_CONTACT_SUCCESS:
      return updateObject(state, {
        loading: false,
        list: [...state.list, ...[payload]],
      });
    case types.ADD_CONTACT_FAILURE:
      return updateObject(state, {
        loading: false,
      });
    default:
      return state;
  }
}

export default contact;
