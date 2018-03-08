import { call, put } from 'redux-saga/effects';

import addUser from '../addUser';
import { addUser as addUserService } from '../../usersService';
import { addUserSuccess, addUserFailure } from '../../usersActions';
import { addSysMessage } from '../../../../notifications/system/sysMessageAction';
import serverMessageHandler from '../../../../../i18n/serverMessageHandler';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_INFO } from '../../../../../config/general';
import { default as closeAddUserDialogSaga } from '../closeAddUserDialog';

describe('Add user', () => {
  const action = {
    payload: {
      userLevel: 0,
      fullName: 'Petar Test',
      password: '1234567890',
      active: true,
      userType: 'Guest',
      email: 'petar45@ptt.yu'
    }
  };
  const serverResponse = {
    response: {
      data: {
        user: {
          active: true,
          email: 'petar45@ptt.yu',
          fullName: 'Petar Test',
          lastLogin: '',
          userId: 6822,
          userLevel: 0,
          userType: 'Guest'
        }
      }
    },
    status: {
      code: 0
    }
  };
  const serverError = {
    error: {
      messages: [
        {
          severity: 8,
          errorcode: 'AWM120'
        }
      ],
      status: {
        code: 8
      }
    }
  };
  describe('Add user Success', () => {
    const generator = addUser(action);
    it('Should call API', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(addUserService, action.payload));
    });
    it('Should emit add user action', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(put(addUserSuccess(serverResponse.response.data.user)));
    });
    it('Should call saga to close dialog', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(closeAddUserDialogSaga));
    });
    it('Should add systemm message', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(put(addSysMessage('You have added user successfully', SYS_MESSAGE_TYPE_INFO)));
    });
    it('Should be done', () => {
      const next = generator.next();

      expect(next.done).toBe(true);
    });
  });
  describe('Add user Failure', () => {
    const generator = addUser(action);
    generator.next(serverError);
    it('Should emit failure action', () => {
      const next = generator.next(serverError);
      expect(next.value).toEqual(put(addUserFailure()));
    });
    it('Shoud emit system message', () => {
      const next = generator.next(serverError);
      const errorMessage = serverMessageHandler(serverError.error);
      expect(next.value).toEqual(put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR)));
    });
  });
});
