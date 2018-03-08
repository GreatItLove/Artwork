import { call, put } from 'redux-saga/effects';

import updateUser from '../updateUser';
import closeSetActiveDialog from '../closeSetActiveDialog';

import { updateUser as updateUserService } from '../../usersService';
import { updateUserSuccess, updateUserFailure } from '../../usersActions';
import { addSysMessage } from '../../../../notifications/system/sysMessageAction';
import serverMessageHandler from '../../../../../i18n/serverMessageHandler';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_SUCCESS } from '../../../../../config/general';
import { default as closeEditUserDialogSaga } from '../closeEditUserDialog';
import { default as closeResetPasswordDialogSaga } from '../closeResetPasswordDialog';

describe('Update user', () => {
  const serverResponse = {
    response: {
      data: {
        user: {
          active: true,
          email: 'anuj.gakhar@gmail.com',
          fullName: 'anuj gakhar 22',
          userId: 6064,
          userLevel: 4,
          userType: 'Support'
        }
      }
    }
  };
  const serverResponseError = {
    error: {
      messages: [
        {
          errorcode: 'AWM103',
          severity: 12
        }
      ],
      status: {
        code: 12
      }
    }
  };
  const action = { payload: { fullName: 'Some full name' } };

  describe('Update user success', () => {
    const generator = updateUser(action);

    it('Should call API', () => {
      const next = generator.next(action);
      expect(next.value).toEqual(call(updateUserService, action.payload));
    });
    it('Should call close dialog', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(closeSetActiveDialog));
    });
    it('Should call closeEditUserDialog saga', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(closeEditUserDialogSaga));
    });
    it('Should call closeResetPasswordDialog saga ', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(closeResetPasswordDialogSaga));
    });
    it('Should emit success system message', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(put(addSysMessage('Account has updated successfully', SYS_MESSAGE_TYPE_SUCCESS)));
    });
    it('Should emit update user success action', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(put(updateUserSuccess(serverResponse.response.data.user)));
    });
    it('Should be done', () => {
      const next = generator.next(serverResponse);
      expect(next.done).toBe(true);
    });
  });
  describe('Update user failure', () => {
    const generator = updateUser(action);
    generator.next(serverResponseError);
    generator.next(serverResponseError);
    it('Should emit failure action', () => {
      const next = generator.next(serverResponseError);
      const message = serverMessageHandler(serverResponseError.error);
      expect(next.value).toEqual(put(addSysMessage(message, SYS_MESSAGE_TYPE_ERROR)));
    });
    it('Should emit update user failure action', () => {
      const next = generator.next(serverResponseError);
      expect(next.value).toEqual(put(updateUserFailure()));
    });
  });
});
