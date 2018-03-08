import * as ContactConst from './contactConstants';

export const fetchContactRequest = data => ({
  type: ContactConst.FETCH_CONTACT_REQUEST,
  payload: data,
});

export const fetchContactSuccess = data => ({
  type: ContactConst.FETCH_CONTACT_SUCCESS,
  payload: data,
});

export const fetchContactFailure = data => ({
  type: ContactConst.FETCH_CONTACT_FAILURE,
  payload: data,
});

export const openContactAddDialog = () => ({
  type: ContactConst.OPEN_CONTACT_ADD_DIALOG,
});

export const closeContactAddDialog = () => ({
  type: ContactConst.CLOSE_CONTACT_ADD_DIALOG,
});

export const updateSearchFilter = data => ({
  type: ContactConst.UPDATE_CONTACTS_SEARCH,
  payload: data,
});

export const switchContactsFilter = data => ({
  type: ContactConst.SWITCH_CONTACTS_FILTER,
  payload: data,
});

export const fetchLookupRequest = data => ({
  type: ContactConst.FETCH_LOOKUP_REQUEST,
  payload: data,
});

export const fetchLookupSuccess = data => ({
  type: ContactConst.FETCH_LOOKUP_SUCCESS,
  payload: data,
});

export const fetchLookupFailure = () => ({
  type: ContactConst.FETCH_LOOKUP_FAILURE,
});

export const checkContacts = data => ({
  type: ContactConst.CHECK_CONTACTS,
  payload: data,
});

export const uncheckContacts = data => ({
  type: ContactConst.UNCHECK_CONTACTS,
  payload: data,
});

export const openBulkUpdateContactDialog = data => ({
  type: ContactConst.OPEN_BULKUPDATE_CONTACT_DIALOG,
  payload: data,
});

export const closeBulkUpdateContactDialog = () => ({
  type: ContactConst.CLOSE_BULKUPDATE_CONTACT_DIALOG,
});

export const bulkContactEditRequest = data => ({
  type: ContactConst.BULK_CONTACT_EDIT_REQUEST,
  payload: data,
});

export const bulkContactEditSuccess = () => ({
  type: ContactConst.BULK_CONTACT_EDIT_SUCCESS,
});

export const bulkContactEditFailure = () => ({
  type: ContactConst.BULK_CONTACT_EDIT_FAILURE,
});
export const clearCheckedContacts = () => ({
  type: ContactConst.CLEAR_CHECKED_CONTACTS,
});

export const contactDownloadPathRequest = () => ({
  type: ContactConst.CONTACT_DOWNLOAD_PATH_REQUEST,
});

export const contactDownloadPathSuccess = data => ({
  type: ContactConst.CONTACT_DOWNLOAD_PATH_SUCCESS,
  payload: data
});

export const contactDownloadPathFailure = () => ({
  type: ContactConst.CONTACT_DOWNLOAD_PATH_FAILURE,
});

export const openContactDownloadDialog = () => ({
  type: ContactConst.OPEN_CONTACT_DOWNLOAD_DIALOG,
});

export const closeContactDownloadDialog = () => ({
  type: ContactConst.CLOSE_CONTACT_DOWNLOAD_DIALOG,
});

export const addContactRequest = data => ({
  type: ContactConst.ADD_CONTACT_REQUEST,
  payload: data,
});

export const addContactSuccess = data => ({
  type: ContactConst.ADD_CONTACT_SUCCESS,
  payload: data,
});

export const addContactFailure = data => ({
  type: ContactConst.ADD_CONTACT_FAILURE,
  payload: data,
});
