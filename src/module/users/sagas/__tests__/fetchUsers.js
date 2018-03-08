import { call, put } from 'redux-saga/effects';

import fetchUsers from '../fetchUsers';
import { fetchUsers as fetchUsersSevice } from '../../usersService';
import { fetchUsersSuccess, fetchUsersFailure } from '../../usersActions';
import { addSysMessage } from '../../../../notifications/system/sysMessageAction';
import serverMessageHandler from '../../../../../i18n/serverMessageHandler';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../../../config/general';

describe('Fetch user', () => {
  const action = { payload: {} };
  const serveDataMock = {
    response: {
      data: {
        users: [
          {
            active: true,
            email: 'demo@artworkmanager.com',
            fullName: 'Andrew Hershey',
            lastLogin: '1505204346',
            userId: 6733,
            userLevel: '4         ',
            userType: 'Support             '
          },
          {
            active: true,
            email: 'anuj.gakhar@gmail.com',
            fullName: 'Anuj Gakhar',
            lastLogin: '1505204346',
            userId: 6064,
            userLevel: '4         ',
            userType: 'Support             '
          },
          {
            active: true,
            email: 'demogallery@artworkmanager.com',
            fullName: 'webmaster',
            lastLogin: '1505204346',
            userId: 9,
            userLevel: '4         ',
            userType: 'Webmaster           '
          },
          {
            active: true,
            email: 'ahershey79@yahoo.com',
            fullName: 'Andrew Hershey',
            lastLogin: '1505204346',
            userId: 6757,
            userLevel: '4         ',
            userType: 'SA                  '
          },
          {
            active: true,
            email: 'hello@managedartwork.com',
            fullName: 'Andrew Hershey',
            lastLogin: '1505204346',
            userId: 4975,
            userLevel: '4         ',
            userType: 'Support             '
          },
          {
            active: true,
            email: 'ellen@ellenmalloy.com',
            fullName: 'Ellen Malloy',
            lastLogin: '1505204346',
            userId: 6796,
            userLevel: '4         ',
            userType: 'Staff               '
          },
          {
            active: false,
            email: 'robin@galleryondivision.com',
            fullName: 'Robin Cairl',
            lastLogin: '1505204346',
            userId: 6795,
            userLevel: '3         ',
            userType: 'Gallery             '
          },
          {
            active: true,
            email: 'andrew@managedartwork.com',
            fullName: 'Andrew Hershey',
            lastLogin: '1505204346',
            userId: 6748,
            userLevel: '3         ',
            userType: 'Gallery             '
          },
          {
            active: true,
            email: 'grend500@gmail.com',
            fullName: 'Yemi',
            lastLogin: '1505204346',
            userId: 6761,
            userLevel: '4         ',
            userType: 'Support             '
          },
          {
            active: true,
            email: 'rumrunner1@gmail.com',
            fullName: 'Dan Sweet',
            lastLogin: '1505204346',
            userId: 5260,
            userLevel: '4         ',
            userType: 'Support             '
          },
          {
            active: true,
            email: 'karl@managedartwork.com',
            fullName: 'Karl Wiese',
            lastLogin: '1505204346',
            userId: 5455,
            userLevel: '4         ',
            userType: 'Support             '
          }
        ]
      },
      pagination: {
        totalPages: 3,
        totalRecordCount: 26,
        recordsPerPage: 10,
        currentPage: 1
      }
    }
  };
  const serverError = {
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
  const generator = fetchUsers(action);

  describe('Fetch users success', () => {
    it('Should call API', () => {
      const next = generator.next();
      expect(next.value).toEqual(call(fetchUsersSevice, action.payload));
    });

    it('Should emit success action', () => {
      const next = generator.next(serveDataMock);
      expect(next.value).toEqual(
        put(
          fetchUsersSuccess({
            users: serveDataMock.response.data.users,
            pagination: serveDataMock.response.pagination
          })
        )
      );
    });
  });
  describe('Fetch users failured', () => {
    const generator = fetchUsers(action);
    generator.next(serverError);
    it('Should emit add system message', () => {
      const next = generator.next(serverError);
      expect(next.value).toEqual(put(addSysMessage(serverMessageHandler(serverError.error), SYS_MESSAGE_TYPE_ERROR)));
    });
    it('Should emit fetch user failure action', () => {
      const next = generator.next(serverError);
      expect(next.value).toEqual(put(fetchUsersFailure()));
    });
  });
});
