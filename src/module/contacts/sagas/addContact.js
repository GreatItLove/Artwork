import { call, put, select } from 'redux-saga/effects';

import { addContact as addContactService } from '../contactServices';
import { addContactSuccess, addContactFailure, closeContactAddDialog, fetchContactRequest } from '../contactActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_INFO } from '../../../config/general';
import { getPagination } from '../contactSelectors';

function* addContact(action) {
  const { payload } = action;
  const { response, error } = yield call(addContactService, payload);
  if (response) {
    const { data: { contact } } = response;
    yield put(addContactSuccess(contact));
    yield put(closeContactAddDialog());

    const pagination = yield select(getPagination);
    yield put(addSysMessage('You have added contact successfully', SYS_MESSAGE_TYPE_INFO));
    yield put(fetchContactRequest({ limit: pagination.recordsPerPage }))
  } else {
    yield put(addContactFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default addContact;
