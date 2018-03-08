import { takeLatest } from 'redux-saga/effects';

import {
  FETCH_CONTACT_REQUEST,
  FETCH_LOOKUP_REQUEST,
  BULK_CONTACT_EDIT_REQUEST,
  CONTACT_DOWNLOAD_PATH_REQUEST,
  ADD_CONTACT_REQUEST,
} from '../contactConstants';

import fetchContact from './fetchContact';
import fetchLookup from './fetchLookup';
import bulkContactEditRequest from './bulkContactEditRequest';
import contactDownloadPath from './contactDownloadPath';
import addContact from './addContact';

function* contactSaga() {
  yield takeLatest(FETCH_CONTACT_REQUEST, fetchContact);
  yield takeLatest(FETCH_LOOKUP_REQUEST, fetchLookup);
  yield takeLatest(BULK_CONTACT_EDIT_REQUEST, bulkContactEditRequest);
  yield takeLatest(CONTACT_DOWNLOAD_PATH_REQUEST, contactDownloadPath);
  yield takeLatest(ADD_CONTACT_REQUEST, addContact);
}

export default contactSaga;
