import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchLogs as fetchLogsService } from '../logsServices';
import { fetchLogsSuccess, fetchLogsFailure } from '../logsActions';
import { LOGS_REQUEST } from '../logsConstants';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';
import serverMessageHandler from '../../../i18n/serverMessageHandler';

function* fetchLogs(action) {
  const { limit } = action.payload;
  const { response, error } = yield call(fetchLogsService, limit);
  if (response) {
    const { data: { activity } } = response;
    yield put(fetchLogsSuccess(activity));
  } else if (error) {
    yield put(fetchLogsFailure(serverMessageHandler(error)));
  } else {
    yield put(addSysMessage('Server connection interrupted', SYS_MESSAGE_TYPE_ERROR));
  }
}

export { fetchLogs };

function* logsSagas() {
  yield takeLatest(LOGS_REQUEST, fetchLogs);
}
export default logsSagas;
