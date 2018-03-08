jest.mock('../../../../service/request');
import qs from 'qs';
import * as usersService from '../usersService';

describe('Users Service', () => {
  describe('fetchUsers', () => {
    it('Should be defined fetchUsers service', () => {
      expect(usersService.fetchUsers).toBeDefined();
    });
    it('Should has proper request options', done => {
      const data = {};
      usersService.fetchUsers(data).then(res => {
        expect(res).toEqual({
          url: 'users/list',
          method: 'post',
          data: qs.stringify(data)
        });
        done();
      });
    });
  });
  describe('deleteUser', () => {
    it('Should be defined deleteUser service', () => {
      expect(usersService.deleteUser).toBeDefined();
    });
    it('Should has proper options for delete user request', done => {
      const userId = 456445;
      usersService.deleteUser(userId).then(res => {
        expect(res).toEqual({
          response: {
            url: `users/${userId}`,
            method: 'delete'
          }
        });
        done();
      });
    });
  });
  describe('addUser', () => {
    it('Should be defined service addUser', () => {
      expect(usersService.addUser).toBeDefined();
    });

    it('Should has proper option', done => {
      const data = { email: 'some@ptt.yu' };
      usersService.addUser(data).then(res => {
        expect(res).toEqual({
          url: 'users',
          method: 'post',
          data: qs.stringify(data)
        });
        done();
      });
    });
  });
  describe('updateUser', () => {
    it('should be defined service updateUser', () => {
      expect(usersService.updateUser).toBeDefined();
    });
    it('Should has proper options', done => {
      const data = { email: 'some@ptt.yu', userId: 4654656 };
      usersService.updateUser(data).then(res => {
        const { userId, ...rest } = data;
        expect(res).toEqual({
          url: `users/${userId}`,
          method: 'patch',
          data: qs.stringify(rest)
        });
        done();
      });
    });
  });
});
