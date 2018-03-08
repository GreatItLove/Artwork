import { takeLatest } from 'redux-saga/effects';

import {
  FETCH_USERS_REQUEST,
  DELETE_USER_REQUEST,
  ADD_USER_REQUEST,
  UPDATE_USER_REQUEST,
  USERS_DOWNLOAD_PATH_REQUEST,
} from '../usersConstants';

import fetchUsers from './fetchUsers';
import deleteUser from './deleteUser';
import addUser from './addUser';
import updateUser from './updateUser';
import usersDownloadPath from './usersDownloadPath';

function* watchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
  yield takeLatest(DELETE_USER_REQUEST, deleteUser);
  yield takeLatest(ADD_USER_REQUEST, addUser);
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
  yield takeLatest(USERS_DOWNLOAD_PATH_REQUEST, usersDownloadPath);
}

export default watchUsers;
