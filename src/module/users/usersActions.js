import * as types from './usersConstants';

export const fetchUsersRequest = data => ({
  type: types.FETCH_USERS_REQUEST,
  payload: data
});

export const fetchUsersSuccess = data => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: data
});

export const fetchUsersFailure = () => ({
  type: types.FETCH_USERS_FAILURE
});

export const deleteUserRequest = userId => ({
  type: types.DELETE_USER_REQUEST,
  payload: userId
});

export const deleteUserSuccess = userId => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId
});

export const deleteUserFailure = () => ({
  type: types.DELETE_USER_FAILURE
});

export const openUserDeleteDialog = userID => ({
  type: types.OPEN_USER_DELETE_DIALOG,
  payload: userID
});

export const closeUserDeleteDialog = () => ({
  type: types.CLOSE_USER_DELETE_DIALOG
});

export const addUserRequest = data => ({
  type: types.ADD_USER_REQUEST,
  payload: data
});

export const addUserSuccess = data => ({
  type: types.ADD_USER_SUCCESS,
  payload: data
});

export const addUserFailure = () => ({
  type: types.ADD_USER_FAILURE
});

export const openUserAddDialog = () => ({
  type: types.OPEN_USER_ADD_DIALOG
});

export const closeUserAddDialog = () => ({
  type: types.CLOSE_USER_ADD_DIALOG
});

export const updateUserRequest = data => ({
  type: types.UPDATE_USER_REQUEST,
  payload: data
});

export const updateUserSuccess = data => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: data
});

export const updateUserFailure = () => ({
  type: types.UPDATE_USER_FAILURE
});

export const openUserSuspendDialog = userId => ({
  type: types.OPEN_USER_SUSPEND_DIALOG,
  payload: userId
});

export const closeUserSuspendDialog = () => ({
  type: types.CLOSE_USER_SUSPEND_DIALOG
});

export const openUserEditDialog = userId => ({
  type: types.OPEN_USER_EDIT_DIALOG,
  payload: userId
});

export const closeUserEditDialog = () => ({
  type: types.CLOSE_USER_EDIT_DIALOG
});

export const openUserResetPasswordDialog = userId => ({
  type: types.OPEN_USER_RESET_PASSWORD_DIALOG,
  payload: userId
});

export const closeUserResetPasswordDialog = () => ({
  type: types.CLOSE_USER_RESET_PASSWORD_DIALOG
});

export const updateSearchFilter = data => ({
  type: types.UPDATE_USERS_SEARCH,
  payload: data,
});

export const switchUsersFilter = data => ({
  type: types.SWITCH_USERS_FILTER,
  payload: data,
});

export const usersDownloadPathRequest = () => ({
  type: types.USERS_DOWNLOAD_PATH_REQUEST,
});

export const usersDownloadPathSuccess = data => ({
  type: types.USERS_DOWNLOAD_PATH_SUCCESS,
  payload: data
});

export const usersDownloadPathFailure = () => ({
  type: types.USERS_DOWNLOAD_PATH_FAILURE,
});

export const openUserDownloadDialog = () => ({
  type: types.OPEN_USER_DOWNLOAD_DIALOG,
});

export const closeUserDownloadDialog = () => ({
  type: types.CLOSE_USER_DOWNLOAD_DIALOG,
});
