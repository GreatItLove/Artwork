jest.mock('../../../../service/request');
import qs from 'qs';

import { fetchAccount, updateAccount } from '../accountService';

describe('Account service', () => {
  it('Should has proper option for fetchAccount', done => {
    fetchAccount().then(res => {
      expect(res).toEqual({
        url: 'me'
      });
      done();
    });
  });
  it('Should has proper option for', done => {
    const data = { fullName: 'some full name', userId: 123 };
    const { userId, ...updateData } = data;
    updateAccount(data).then(res => {
      expect(res).toEqual({
        url: `users/${userId}`,
        method: 'patch',
        data: qs.stringify(updateData)
      });
      done();
    });
  });
});
