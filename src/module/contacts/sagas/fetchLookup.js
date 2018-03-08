import { call, put } from 'redux-saga/effects';

import { fetchLookup as fetchLookupService } from '../contactServices';
import { fetchLookupSuccess, fetchLookupFailure } from '../contactActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* fetchLookup(action) {
  const { response, error } = yield call(fetchLookupService, action.payload);
  if (response) {
    const { data } = response;
    yield put(fetchLookupSuccess({ data: data[action.payload], key: action.payload }));
  } else {
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(fetchLookupFailure());
  }
}

export default fetchLookup;
