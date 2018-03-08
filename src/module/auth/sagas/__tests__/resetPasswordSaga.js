import { call, put } from 'redux-saga/effects';

import { resetPasswordRequest, resetPasswordSuccess, resetPasswordFailure } from '../../authActions';
import { resetPassword as resetPasswordService } from '../../authServices';
import { addSysMessage } from '../../../notifications/system/sysMessageAction';
import serverMessage from '../../../../i18n/serverMessage';
import { SYS_MESSAGE_TYPE_INFO, SYS_MESSAGE_TYPE_ERROR } from '../../../../config/general';

import resetPassword from '../resetPasswordSaga';

describe('Reset password saga', () => {
  const action = resetPasswordRequest({ uuid: '4546464', password: '4564564' });
  describe('Reset Password Success', () => {
    const generator = resetPassword(action);
    const serverResponse = {
      response: {
        messages: [
          {
            severity: 4,
            errorcode: 'AWM107'
          }
        ],
        status: {
          code: 4
        }
      }
    };
    it('Should call end point', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(resetPasswordService, action.payload));
    });
    it('Should emit sys message action', () => {
      const next = generator.next(serverResponse);
      const messageIndex = serverResponse.response.messages[0].errorcode;
      expect(next.value).toEqual(put(addSysMessage(serverMessage[messageIndex], SYS_MESSAGE_TYPE_INFO)));
    });
    it('Should emit action for reset password success', () => {
      const next = generator.next();
      expect(next.value).toEqual(put(resetPasswordSuccess()));
    });
  });
  describe('Reset Password failure', () => {
    const generator = resetPassword(action);
    const serverResponse = {
      error: {
        data: {
          messages: [
            {
              severity: 4,
              errorcode: 'AWM107'
            }
          ],
          status: {
            code: 4
          }
        }
      }
    };
    generator.next(serverResponse);
    it('Should emit sys message that reset password failure', () => {
      const next = generator.next(serverResponse);
      const messageIndex = serverResponse.error.data.messages[0].errorcode;
      expect(next.value).toEqual(put(addSysMessage(serverMessage[messageIndex], SYS_MESSAGE_TYPE_ERROR)));
    });
    it('Should emit action thate reset password failure', () => {
      const next = generator.next();
      expect(next.value).toEqual(put(resetPasswordFailure()));
    });
  });
  describe('Reset password server connection failure ', () => {
    const generator = resetPassword(action);
    const serverResponse = { some: 'some response' };
    generator.next(serverResponse);
    it('Should emit sys message', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(
        put(addSysMessage('There is a problem. That is all what we know at the moment', SYS_MESSAGE_TYPE_ERROR))
      );
    });
    it('Should emit action reste password failure', () => {
      const next = generator.next();
      expect(next.value).toEqual(put(resetPasswordFailure()));
    });
  });
});
