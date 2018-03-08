import { call, put, select } from 'redux-saga/effects';
import { deleteArtist as deleteArtistService } from '../artistsService';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import {
  SYS_MESSAGE_TYPE_INFO,
} from '../../../config/general';
import { getPagination } from '../artistsSelectors';
import { fetchArtistsRequest } from '../artistsActions';

function* deleteArtist(action) {
  const error = yield call(deleteArtistService, action);
  const errorMessage = serverMessageHandler(error);
  yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_INFO));

  const pagination = yield select(getPagination);
  yield put(fetchArtistsRequest({ limit: pagination.recordsPerPage }))
}

export default deleteArtist;
