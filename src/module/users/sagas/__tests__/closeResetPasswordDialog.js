import { put, select } from 'redux-saga/effects';

import { closeUserResetPasswordDialog } from '../../usersActions';
import { getResettingPassword } from '../../usersSelectors';

import { default as closeResetPasswordDialogSaga } from '../closeResetPasswordDialog';

describe('closeUserResetPasswordDialog', () => {
  describe('Dialog is open', () => {
    const generator = closeResetPasswordDialogSaga();
    it('Should select state from selector', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(select(getResettingPassword));
    });
    it('Should emit action for close dialog', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(put(closeUserResetPasswordDialog()));
    });
    it('Should be done', () => {
      const next = generator.next(true);
      expect(next.done).toBe(true);
    });
  });
  describe('Dialog is close', () => {
    const generator = closeResetPasswordDialogSaga();
    generator.next(false);
    it('Should be done', () => {
      const next = generator.next(false);
      expect(next.done).toBe(true);
    });
  });
});
