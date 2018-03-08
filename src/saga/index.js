import { fork } from 'redux-saga/effects';

import authSagas from '../module/auth/sagas/authSagas';
import accountSaga from '../module/account/sagas/accountSaga';
import usersSaga from '../module/users/sagas/usersSagas';
import artistsSaga from '../module/artists/sagas/artistsSagas';
import newsSaga from '../module/news/sagas/newsSaga';
import logsSagas from '../module/logs/sagas/logsSagas';
import contactSaga from '../module/contacts/sagas/contactSagas';
import invoiceSaga from '../module/invoices/sagas/invoiceSaga';

function* rootSaga() {
  yield fork(authSagas);
  yield fork(accountSaga);
  yield fork(usersSaga);
  yield fork(artistsSaga);
  yield fork(newsSaga);
  yield fork(logsSagas);
  yield fork(contactSaga);
  yield fork(invoiceSaga);
}

export default rootSaga;
