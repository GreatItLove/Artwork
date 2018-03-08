import { put, select } from 'redux-saga/effects';

import { closeUserSuspendDialog } from '../usersActions';

import { getChangingActive } from '../usersSelectors';

function* closeSetActiveDialog() {
  const changingActive = yield select(getChangingActive);
  if (changingActive) {
    yield put(closeUserSuspendDialog());
  }
}

export default closeSetActiveDialog;
