import { call, put } from 'redux-saga/effects';

import forgotPassword from '../forgotPasswordSaga';
import { forgotPassword as forgotPasswordService } from '../../authServices';
import { forgotPasswordSuccess, forgotPasswordFailure } from '../../authActions';
import { addSysMessage } from '../../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_INFO } from '../../../../config/general';
import serverMessage from '../../../../i18n/serverMessage';

describe('Forgot Password Saga', () => {
  const data = { email: 'testEmail@ptt.yu' };
  const action = forgotPassword(data);

  describe('Success response ', () => {
    const generator = forgotPassword(action);
    const serverResponse = {
      response: {
        messages: [
          {
            severity: 2,
            errorcode: 'AWM106'
          }
        ],
        status: {
          code: 2
        }
      }
    };
    it('Should call end point', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(forgotPasswordService, action.payload));
    });
    it('Should add system message', () => {
      const index = serverResponse.response.messages[0].errorcode;
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(put(addSysMessage(serverMessage[index], SYS_MESSAGE_TYPE_INFO)));
    });
    it('Should emit action forget password success', () => {
      const next = generator.next();
      expect(next.value).toEqual(put(forgotPasswordSuccess()));
    });
  });

  describe('Response Failure ', () => {
    const generator = forgotPassword(action);
    const serverResponse = {
      error: {
        data: {
          messages: [
            {
              severity: 2,
              errorcode: 'AWM106'
            }
          ],
          status: {
            code: 2
          }
        }
      }
    };

    generator.next(serverResponse);
    it('Should emit sys message action', () => {
      const next = generator.next(serverResponse);
      const messageIndex = serverResponse.error.data.messages[0].errorcode;
      expect(next.value).toEqual(put(addSysMessage(serverMessage[messageIndex], SYS_MESSAGE_TYPE_ERROR)));
    });
    it('Should emit action fogot password failure', () => {
      const next = generator.next();
      expect(next.value).toEqual(put(forgotPasswordFailure()));
    });
  });
  describe('Server response failure', () => {
    const generator = forgotPassword(action);
    const serverResponse = { some: 'some response' };
    generator.next(serverResponse);
    it('Should emit sys message that something with connection', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(
        put(addSysMessage('There is a problem. That is all what we know at the moment', SYS_MESSAGE_TYPE_ERROR))
      );
    });
  });
});
