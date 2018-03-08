import { takeLatest } from 'redux-saga/effects';

import {
  FETCH_ARTISTS_REQUEST,
  ADD_ARTIST_REQUEST,
  FETCH_GENRES_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  BULK_ARTIST_EDIT_REQUEST,
  GET_ARTIST_INFO_REQUEST,
  PATCH_ARTIST_REQUEST,
  DELETE_ARTIST,
  ARTIST_DOWNLOAD_PATH_REQUEST
} from '../artistsConstants';

import fetchArtists from './fetchArtists';
import addArtist from './addArtist'
import fetchGenres from './fetchGenres';
import fetchCategories from './fetchCategories';
import bulkArtistEditRequest from './bulkArtistEditRequest';
import getArtistInfoRequest from './getArtistInfoRequest';
import patchArtist from './patchArtist';
import deleteArtist from './deleteArtist';
import artistsDownloadPath from './artistsDownloadPath';

function* watchArtists() {
  yield takeLatest(FETCH_ARTISTS_REQUEST, fetchArtists);
  yield takeLatest(ADD_ARTIST_REQUEST, addArtist);
  yield takeLatest(FETCH_GENRES_REQUEST, fetchGenres);
  yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategories);
  yield takeLatest(BULK_ARTIST_EDIT_REQUEST, bulkArtistEditRequest);
  yield takeLatest(GET_ARTIST_INFO_REQUEST, getArtistInfoRequest);
  yield takeLatest(PATCH_ARTIST_REQUEST, patchArtist);
  yield takeLatest(DELETE_ARTIST, deleteArtist);
  yield takeLatest(ARTIST_DOWNLOAD_PATH_REQUEST, artistsDownloadPath);
}

export default watchArtists;
