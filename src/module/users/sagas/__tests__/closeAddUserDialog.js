import { select, put } from 'redux-saga/effects';

import closeAddUserDialog from '../closeAddUserDialog';
import { getAdding } from '../../usersSelectors';
import { closeUserAddDialog } from '../../usersActions';

describe('Close Add User Dialog', () => {
  describe('Dialog is open', () => {
    const generator = closeAddUserDialog();
    it('Should take state', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(select(getAdding));
    });
    it('Should emit close dialog action', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(put(closeUserAddDialog()));
    });
  });
  describe('Dialog is closed', () => {
    const generator = closeAddUserDialog();
    generator.next(false);
    it('Should be done', () => {
      const next = generator.next(false);
      expect(next.done).toBe(true);
    });
  });
});
