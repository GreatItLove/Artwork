import { call, put } from 'redux-saga/effects';

import { fetchContact as fetchContactService } from '../contactServices';
import { fetchContactSuccess, fetchContactFailure } from '../contactActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* fetchContact(action) {
  const { payload } = action;
  const { response, error } = yield call(fetchContactService, payload);
  if (response) {
    const { data: { contacts }, pagination } = response;
    yield put(fetchContactSuccess({ contacts, pagination }));
  } else {
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(fetchContactFailure());
  }
}

export default fetchContact;
