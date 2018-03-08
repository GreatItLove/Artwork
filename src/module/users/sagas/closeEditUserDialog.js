import { put, select } from 'redux-saga/effects';

import { closeUserEditDialog as closeUserEditDialogAction } from '../usersActions';
import { getEditing } from '../usersSelectors';

function* closeEditUserDialog() {
  const editing = yield select(getEditing);
  if (editing) {
    yield put(closeUserEditDialogAction());
  }
}

export default closeEditUserDialog;
