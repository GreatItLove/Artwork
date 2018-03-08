import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchNews } from '../newsServices';
import { fetchNewsSuccess, fetchNewsFailure } from '../newsActions';
import { NEWS_REQUEST } from '../newsConstants';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';
import serverMessageHandler from '../../../i18n/serverMessageHandler';

function* news(action) {
  const { response, error } = yield call(fetchNews, action.payload);
  if (response) {
    const { data: { news } } = response;
    yield put(fetchNewsSuccess(news));
  } else if (error) {
    yield put(fetchNewsFailure(serverMessageHandler(error)));
  } else {
    yield put(addSysMessage('Server connection interrupted', SYS_MESSAGE_TYPE_ERROR));
  }
}

export { news };

function* newsSagas() {
  yield takeLatest(NEWS_REQUEST, news);
}
export default newsSagas;
