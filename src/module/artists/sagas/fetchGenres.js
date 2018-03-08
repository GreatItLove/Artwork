import { call, put } from 'redux-saga/effects';

import { fetchGenres as fetchGenresService } from '../artistsService';
import { fetchGenresSuccess, fetchGenresFailure, fetchCategoriesRequest } from '../artistsActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* fetchGenres(action) {
  const { payload } = action;
  const { response, error } = yield call(fetchGenresService, payload);
  if (response) {
    const { data: { genre } } = response;
    yield put(fetchGenresSuccess(genre));
    yield put(fetchCategoriesRequest());
  } else {
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(fetchGenresFailure());
  }
}

export default fetchGenres;
