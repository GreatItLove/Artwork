import { call, put } from 'redux-saga/effects';

import { fetchCategories as fetchCategoriesService } from '../artistsService';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../artistsActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* fetchCategories(action) {
  const { payload } = action;
  const { response, error } = yield call(fetchCategoriesService, payload);
  if (response) {
    const { data: { category } } = response;
    yield put(fetchCategoriesSuccess(category));
  } else {
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(fetchCategoriesFailure());
  }
}

export default fetchCategories;
