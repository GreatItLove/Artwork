import {select, put} from 'redux-saga/effects';

import closeAddArtistDialog from '../closeAddArtistDialog';
import {getAdding} from '../../artistsSelectors';
import {closeArtistAddDialog} from '../../artistsActions';

describe('Close Add User Dialog', () => {
  describe('Dialog is open', () => {
    const generator = closeAddArtistDialog();
    it('Should take state', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(select(getAdding));
    });
    it('Should emit close dialog action', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(put(closeArtistAddDialog()));
    });
  });
  describe('Dialog is closed', () => {
    const generator = closeAddArtistDialog();
    generator.next(false);
    it('Should be done', () => {
      const next = generator.next(false);
      expect(next.done).toBe(true);
    });
  });
});
