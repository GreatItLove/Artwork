import {put, select} from 'redux-saga/effects';

import {closeArtistAddDialog} from '../artistsActions';
import {getAdding} from '../artistsSelectors';

function* closeAddArtistDialog() {
  const adding = yield select(getAdding);
  if (adding) {
    yield put(closeArtistAddDialog());
  }
}

export default closeAddArtistDialog;
