import { put, select } from 'redux-saga/effects';

import { closeUserResetPasswordDialog } from '../usersActions';
import { getResettingPassword } from '../usersSelectors';

function* closeResetPasswordDialog() {
  const resettingPassword = yield select(getResettingPassword);
  if (resettingPassword) {
    yield put(closeUserResetPasswordDialog());
  }
}

export default closeResetPasswordDialog;
