import { call, put } from 'redux-saga/effects';

import jwt from '../../../../store/jwtStorage';
import { loginSuccess, loginRequest, loginFailure } from '../../authActions';
import { login as loginService } from '../../authServices';
import { addSysMessage } from '../../../notifications/system/sysMessageAction';
import serverMessage from '../../../../i18n/serverMessage';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../../config/general';

import logIn from '../loginSaga';

describe('Login', () => {
  const loginData = {
    email: 'someemail',
    password: '46546',
    startPage: '/somepage'
  };
  const action = loginRequest(loginData);

  describe('Success login', () => {
    const generator = logIn(action);
    const response = {
      response: {
        data: {
          user: {
            token:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJjdXN0b21lcmlkIjoxODU5LCJpc3MiOiJodHRwczovL215YXBpIiwic3ViIjo2MDY0LCJleHAiOjE1MDQxMDQ1MTl9.YLO-lC6dDXa7s7P6dq8FDXSReNGmK8ad5JhvmYhHmV76j4pPr02ntvgfw8Sh2BypExRJ8PjvSsVc_ibtS13mjA'
          }
        }
      }
    };
    it('Should call login service', () => {
      const next = generator.next(response);
      const { startPage, ...login } = loginData;
      expect(next.value).toEqual(call(loginService, login));
    });

    it('Should call jwt storage', () => {
      const next = generator.next(response);
      const dataToStorage = response.response.data.user;
      expect(next.value).toEqual(call(jwt.setJWT, dataToStorage));
    });
    it('Should emit login success action', () => {
      const next = generator.next();
      const { token } = response.response.data.user;
      const expectedData = {
        startPage: loginData.startPage,
        token: token
      };
      expect(next.value).toEqual(put(loginSuccess(expectedData)));
    });
  });
  describe('Failure login', () => {
    const generator = logIn(action);
    const serverResponse = {
      error: {
        data: {
          messages: [
            {
              severity: 8,
              errorcode: 'AWM102'
            }
          ],
          status: {
            code: 8
          }
        }
      }
    };
    generator.next(serverResponse);
    it('Should emit sys message action for login failure', () => {
      const next = generator.next(serverResponse);
      const mesageIndex = serverResponse.error.data.messages[0].errorcode;
      expect(next.value).toEqual(put(addSysMessage(serverMessage[mesageIndex], SYS_MESSAGE_TYPE_ERROR)));
    });
    it('Should emit action login failure', () => {
      const next = generator.next();
      expect(next.value).toEqual(put(loginFailure()));
    });
  });
  describe('Server connection failure', () => {
    const generator = logIn(action);
    const serverResponse = { some: 'some response' };
    generator.next(serverResponse);
    it('Should emit sys message that something worng with connection', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(put(addSysMessage('Server connection interrupted', SYS_MESSAGE_TYPE_ERROR)));
    });
    it('Should emit login failure action', () => {
      const next = generator.next();
      expect(next.value).toEqual(put(loginFailure()));
    });
  });
});
