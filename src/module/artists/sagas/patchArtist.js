import { call, put, select } from 'redux-saga/effects';
import { patchArtist as patchArtistService, uploadFileArtist as uploadFileArtistService } from '../artistsService';
import { patchArtistSuccess, patchArtistFailure } from '../artistsActions';
import serverMessageHandler from '../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { getArtistInfo } from '../artistsSelectors';
import {
  SYS_MESSAGE_TYPE_ERROR,
  SYS_MESSAGE_TYPE_INFO,
} from '../../../config/general';

function* patchArist(action) {
  var data;
  var artistInfo = yield select(getArtistInfo)
  for (var key in action.payload) {
    if (action.payload[key] === artistInfo[key]) delete action.payload[key]
  }


  if (action.payload.file === undefined || action.payload.file === null) {
    delete action.payload.file;
    delete action.payload.field;
    data = yield call(patchArtistService, action);
  } else {
    data = yield call(uploadFileArtistService, action);
  }
  const { response, error } = data

  if (response) {
    //const { data: { artist } } = response;
    yield put(patchArtistSuccess(action.payload));
    //TODO add translate
    yield put(
      addSysMessage('You have configured artist successfully', SYS_MESSAGE_TYPE_INFO),
    );
  } else {
    yield put(patchArtistFailure());
    const errorMessage = serverMessageHandler(error);
    yield put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR));
  }
}

export default patchArist;
