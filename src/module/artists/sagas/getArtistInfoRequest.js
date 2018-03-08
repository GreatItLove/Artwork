import { call, put } from 'redux-saga/effects';

import { getArtistInfoRequest as getArtistInfoRequestService } from '../artistsService';
import { getArtistInfoSuccess, getArtistInfoFailure } from '../artistsActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';

function* getArtistInfoRequest(action) {
  const { payload } = action;
  const { response, error } = yield call(getArtistInfoRequestService, payload);
  if (response) {
    const { data: { artist } } = response;
    yield put(getArtistInfoSuccess(artist));
  } else {
    const errorMessage = serverMessageHandler(error);

    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(getArtistInfoFailure());
  }
}

export default getArtistInfoRequest;
