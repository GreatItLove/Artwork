import { select, put } from 'redux-saga/effects';

import closeSetActiveDialog from '../closeSetActiveDialog';
import { closeUserSuspendDialog as closeUserSuspendDialogAction } from '../../usersActions';
import { getChangingActive } from '../../usersSelectors';

describe('close Set Active Dialog', () => {
  describe('Dialog is open', () => {
    const generator = closeSetActiveDialog();
    it('Should take state', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(select(getChangingActive));
    });
    it('Should emit action for close dialog', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(put(closeUserSuspendDialogAction()));
    });
  });
  describe('Dialog is closed', () => {
    const generator = closeSetActiveDialog();
    generator.next(false);
    it('Should be done', () => {
      const next = generator.next(false);
      expect(next.done).toBe(true);
    });
  });
});
