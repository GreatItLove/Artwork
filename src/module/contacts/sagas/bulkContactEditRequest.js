import { call, put, select } from 'redux-saga/effects';

import { getPagination } from '../contactSelectors';
import { bulkContactEditRequest as bulkContactEditRequestService } from '../contactServices';
import {
  bulkContactEditSuccess,
  bulkContactEditFailure,
  fetchContactRequest,
  updateSearchFilter,
  closeBulkUpdateContactDialog,
  clearCheckedContacts,
} from '../contactActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* bulkContactEditRequest(action) {
  const { payload } = action;
  const { response, error } = yield call(bulkContactEditRequestService, payload);
  if (response) {
    const pagination = yield select(getPagination);
    //TODO add translate
    yield put(fetchContactRequest({ limit: pagination.recordsPerPage }));
    if (payload.delete) {
      yield put(clearCheckedContacts());
    }
    yield put(bulkContactEditSuccess());
    yield put(closeBulkUpdateContactDialog());
    yield put(updateSearchFilter({}));
  } else {
    yield put(bulkContactEditFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default bulkContactEditRequest;
