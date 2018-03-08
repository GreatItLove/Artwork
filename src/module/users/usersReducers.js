import updateObject from '../../utility/updateObject';
import removeItemFromArray from '../../utility/removeItemFromArray';
import updateItemInArray from '../../utility/updateItemInArray';

import * as types from './usersConstants';

function users(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_USERS_REQUEST:
      return updateObject(state, { fetching: true });

    case types.FETCH_USERS_SUCCESS:
      return updateObject(state, {
        fetching: false,
        list: payload.users,
        pagination: payload.pagination
          ? payload.pagination
          : {
            ...state.pagination,
            totalRecordCount: 0,
          },
      });

    case types.FETCH_USERS_FAILURE:
      return updateObject(state, { fetching: false });

    case types.ADD_USER_REQUEST:
    case types.UPDATE_USER_REQUEST:
      return updateObject(state, { loading: true });

    case types.OPEN_USER_DELETE_DIALOG:
      return updateObject(state, { deleting: payload });

    case types.DELETE_USER_REQUEST:
      return updateObject(state, { deleting: true });

    case types.DELETE_USER_SUCCESS:
      return updateObject(state, {
        list: removeItemFromArray(state.list, 'userId', payload),
        deleting: false
      });

    case types.DELETE_USER_FAILURE:
    case types.CLOSE_USER_DELETE_DIALOG:
      return updateObject(state, { deleting: false });

    case types.ADD_USER_SUCCESS:
      return updateObject(state, {
        list: [...state.list, ...[payload]],
        loading: false
      });

    case types.UPDATE_USER_SUCCESS:
      return updateObject(state, {
        list: updateItemInArray(state.list, 'userId', payload.userId, user => {
          return updateObject(user, payload);
        }),
        loading: false
      });

    case types.ADD_USER_FAILURE:
    case types.UPDATE_USER_FAILURE:
      return updateObject(state, { loading: false });

    case types.OPEN_USER_SUSPEND_DIALOG:
      return updateObject(state, { changingActive: payload });

    case types.CLOSE_USER_SUSPEND_DIALOG:
      return updateObject(state, { changingActive: false });

    case types.OPEN_USER_ADD_DIALOG:
      return updateObject(state, { adding: true });
    case types.CLOSE_USER_ADD_DIALOG:
      return updateObject(state, { adding: false });

    case types.OPEN_USER_EDIT_DIALOG:
      return updateObject(state, { editing: payload });
    case types.CLOSE_USER_EDIT_DIALOG:
      return updateObject(state, { editing: false });

    case types.OPEN_USER_RESET_PASSWORD_DIALOG:
      return updateObject(state, { resettingPassword: payload });
    case types.CLOSE_USER_RESET_PASSWORD_DIALOG:
      return updateObject(state, { resettingPassword: false });
    case types.UPDATE_USERS_SEARCH:
      return updateObject(state, { searchFilter: payload });
    case types.SWITCH_USERS_FILTER:
      return updateObject(state, { showingFilter: payload })
    case types.USERS_DOWNLOAD_PATH_REQUEST:
      return updateObject(state, { fetchingDownloadpath: true })
    case types.USERS_DOWNLOAD_PATH_SUCCESS:
      return updateObject(state, {
        fetchingDownloadpath: false,
        downloadPath: payload.downloadFilePath,
      });
    case types.USERS_DOWNLOAD_PATH_FAILURE:
      return updateObject(state, { fetchingDownloadpath: false })
    case types.OPEN_USER_DOWNLOAD_DIALOG:
      return updateObject(state, { downloading: true })
    case types.CLOSE_USER_DOWNLOAD_DIALOG:
      return updateObject(state, { downloading: false })
    default:
      return state;
  }
}

export default users;
