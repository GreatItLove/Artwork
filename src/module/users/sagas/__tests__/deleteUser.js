import { call, put } from 'redux-saga/effects';

import deleteUser from '../deleteUser';
import { deleteUser as deleteUserService } from '../../usersService';
import { deleteUserSuccess, deleteUserFailure } from '../../usersActions';
import { addSysMessage } from '../../../../notifications/system/sysMessageAction';
import serverMessageHandler from '../../../../../i18n/serverMessageHandler';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_INFO } from '../../../../../config/general';

describe('Delete user', () => {
  const action = {
    payload: 45646
  };
  const serverResponse = {
    response: {
      messages: [
        {
          severity: 2,
          errorcode: 'AWM111'
        }
      ],
      status: {
        code: 2
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
  describe('Success delete user', () => {
    const generator = deleteUser(action);

    it('Should call API', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(deleteUserService, action.payload));
    });

    it('Should emit success action', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(put(deleteUserSuccess(action.payload)));
    });
    it('Should emit system message', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(
        put(addSysMessage(serverMessageHandler(serverResponse.response), SYS_MESSAGE_TYPE_INFO))
      );
    });
  });
  describe('Failure delete user', () => {
    const generator = deleteUser(action);
    generator.next(serverResponseError);
    it('Should emit failure action', () => {
      const next = generator.next(serverResponseError);
      expect(next.value).toEqual(put(deleteUserFailure()));
    });
    it('Should emit error system mesage action ', () => {
      const next = generator.next(serverResponseError);
      const message = serverMessageHandler(serverResponseError.error);
      expect(next.value).toEqual(put(addSysMessage(message, SYS_MESSAGE_TYPE_ERROR)));
    });
  });
});
