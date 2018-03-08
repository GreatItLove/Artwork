import { call, put, select } from 'redux-saga/effects';
import { getPagination } from '../artistsSelectors';
import { addArtist as addArtistService } from '../artistsService';
import { addArtistSuccess, addArtistFailure, fetchArtistsRequest } from '../artistsActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import {
  SYS_MESSAGE_TYPE_ERROR,
  SYS_MESSAGE_TYPE_INFO,
} from '../../../config/general';
import { default as closeAddArtistDialogSaga } from './closeAddArtistDialog';

function* addArtist(action) {
  const { payload } = action;
  const { response, error } = yield call(addArtistService, payload);
  if (response) {
    const { data: { artists } } = response;
    yield put(addArtistSuccess(artists));
    yield call(closeAddArtistDialogSaga);
    const pagination = yield select(getPagination);
    //TODO add translate
    yield put(
      addSysMessage('You have added artist successfully', SYS_MESSAGE_TYPE_INFO),
    );
    yield put(fetchArtistsRequest({ limit: pagination.recordsPerPage }))
  } else {
    yield put(addArtistFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default addArtist;
