import { put, select } from 'redux-saga/effects';

import { closeUserAddDialog } from '../usersActions';
import { getAdding } from '../usersSelectors';

function* closeAddUserDialog() {
  const adding = yield select(getAdding);
  if (adding) {
    yield put(closeUserAddDialog());
  }
}

export default closeAddUserDialog;
