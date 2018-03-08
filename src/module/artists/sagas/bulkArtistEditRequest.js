import { call, put, select } from 'redux-saga/effects';
import { getPagination } from '../artistsSelectors';
import { bulkArtistEditRequest as bulkArtistEditRequestService } from '../artistsService';
import { bulkArtistEditSuccess, bulkArtistEditFailure, fetchArtistsRequest, updateSearchFilter } from '../artistsActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import {
  SYS_MESSAGE_TYPE_ERROR,
  SYS_MESSAGE_TYPE_INFO,
} from '../../../config/general';

function* bulkArtistEditRequest(action) {
  const { payload } = action;
  const { response, error } = yield call(bulkArtistEditRequestService, payload);

  if (response) {
    const pagination = yield select(getPagination);
    //TODO add translate
    yield put(bulkArtistEditSuccess());
    yield put(updateSearchFilter({}))
    yield put(
      addSysMessage('You have added artist successfully', SYS_MESSAGE_TYPE_INFO),
    );
    yield put(fetchArtistsRequest({ limit: pagination.recordsPerPage }))
  } else {
    yield put(bulkArtistEditFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default bulkArtistEditRequest;
