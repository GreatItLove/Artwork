import {call, put} from 'redux-saga/effects';

import {fetchArtists as fetchArtistsService} from '../artistsService';
import {fetchArtistsSuccess, fetchArtistsFailure} from '../artistsActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import {addSysMessage} from '../../notifications/system/sysMessageAction';
import {SYS_MESSAGE_TYPE_ERROR} from '../../../config/general';

function* fetchArtists(action) {
  const {payload} = action;
  const {response, error} = yield call(fetchArtistsService, payload);
  if (response) {
    const {pagination, data: {artists}} = response;
    yield put(fetchArtistsSuccess(artists, pagination));
  } else {
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
    yield put(fetchArtistsFailure());
  }
}

export default fetchArtists;
