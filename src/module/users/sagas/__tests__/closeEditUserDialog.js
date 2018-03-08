import { put, select } from 'redux-saga/effects';

import { closeUserEditDialog as closeUserEditDialogAction } from '../../usersActions';
import { getEditing } from '../../usersSelectors';
import closeEditUserDialog from '../closeEditUserDialog';

describe('closeEditUserDialog', () => {
  describe('Edit user dialog is open', () => {
    const generator = closeEditUserDialog();
    it('Should select editing property from state', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(select(getEditing));
    });
    it('Should emit action close user edit dialog', () => {
      const next = generator.next(true);
      expect(next.value).toEqual(put(closeUserEditDialogAction()));
    });
    it('Should be done ', () => {
      const next = generator.next(true);
      expect(next.done).toBe(true);
    });
  });
  describe('Edit user dialog is closed', () => {
    const generator = closeEditUserDialog();
    generator.next(false);
    it('Should be done', () => {
      const next = generator.next(false);
      expect(next.done).toBe(true);
    });
  });
});
