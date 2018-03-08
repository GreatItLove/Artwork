import { call, put } from 'redux-saga/effects';

import jwt from '../../../store/jwtStorage';

import { removeCustomer } from '../../account/actions/customerActions';
import { removeSettings } from '../../account/actions/settingsActions';
import { removeAccount } from '../../account/actions/accountActions';

function* logout() {
  yield call(jwt.removeJWT);
  yield put(removeCustomer());
  yield put(removeSettings());
  yield put(removeAccount());
}

export default logout;
