jest.mock('../../../service/request');
import qs from 'qs';

import { login, resetPassword, forgotPassword } from '../authServices';

describe('Auth service', () => {
  it('Login service should has options', done => {
    const data = { username: 'test@some.com', password: '65454' };
    login(data).then(res => {
      expect(res).toEqual({
        response: {
          url: 'user/login',
          method: 'post',
          data: qs.stringify(data)
        }
      });
      done();
    });
  });
  it('Forgot password should has options', done => {
    const data = { email: 'test@some.com' };
    forgotPassword(data).then(res => {
      expect(res).toEqual({
        response: {
          url: 'user/forgot',
          method: 'post',
          data: qs.stringify(data)
        }
      });
      done();
    });
  });
  it('Reset password should has option', done => {
    const data = { uuid: '445466', password: '4564546' };
    resetPassword(data).then(res => {
      expect(res).toEqual({
        response: {
          url: 'user/reset',
          method: 'post',
          data: qs.stringify(data)
        }
      });
      done();
    });
  });
});
