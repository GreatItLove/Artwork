import {takeLatest} from 'redux-saga/effects';

import watchArtists, {closeSetActiveDialog} from '../artistsSagas';
import fetchArtists from '../fetchArtists';
import addArtist from '../addArtist';
import {
  FETCH_ARTISTS_REQUEST,
  ADD_ARTIST_REQUEST,
} from '../../artistsConstants';

describe('Watch Artists', () => {
  const generator = watchArtists();
  it('Should call fetchArtist', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(FETCH_ARTISTS_REQUEST, fetchArtists));
  });
  it('Should call add artist', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(ADD_ARTIST_REQUEST, addArtist));
  });
});
