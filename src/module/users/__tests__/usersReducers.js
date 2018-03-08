import usersReducers from '../usersReducers';
import * as usersActions from '../usersActions';
import initialState from '../../../../store/initialState';

const usersInit = initialState.users;
const serveDataMock = [
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
];
const pagination = {
  totalPages: 3,
  totalRecordCount: 26,
  recordsPerPage: 10,
  currentPage: 1
};

describe('Users Reducers', () => {
  describe('Fetch Users', () => {
    it('Fetch users request Should set fetching property to true ', () => {
      const action = usersActions.fetchUsersRequest({});
      const newState = usersReducers(usersInit, action);
      const expectedState = { ...usersInit, ...{ fetching: true } };
      expect(newState).toEqual(expectedState);
    });

    it('Fetch user success', () => {
      const oldState = { ...usersInit, ...{ fetching: true } };
      const action = usersActions.fetchUsersSuccess({
        users: serveDataMock,
        pagination
      });
      const newState = usersReducers(oldState, action);
      const expetedState = {
        ...oldState,
        ...{ fetching: false, list: serveDataMock, pagination }
      };
      expect(newState).toEqual(expetedState);
    });

    it('Fetch user failure', () => {
      const oldState = { ...usersInit, ...{ fetching: true } };
      const action = usersActions.fetchUsersFailure();
      const newState = usersReducers(oldState, action);
      expect(newState).toEqual(usersInit);
    });
  });
  describe('Delete User', () => {
    describe('Delete user request', () => {
      it('Should loading property has value true ', () => {
        const action = usersActions.deleteUserRequest(545);
        const newState = usersReducers(usersInit, action);
        const expectedState = { ...usersInit, ...{ deleting: true } };
        expect(newState).toEqual(expectedState);
      });
    });
    describe('Delete user success', () => {
      const userId = 6733;
      const action = usersActions.deleteUserSuccess(userId);
      const oldState = { ...usersInit, ...{ list: serveDataMock } };
      const newState = usersReducers(oldState, action);
      it('Should delete user from state', () => {
        const deletedItems = newState.list.filter(user => userId === user.userId);
        expect(deletedItems.length).toBe(0);
      });
      it('Deleting property should has value false', () => {
        expect(newState.deleting).toBe(false);
      });
    });
    describe('Delete user failure', () => {
      it('Delete user failure - loading propety should has value false ', () => {
        const oldState = { ...usersInit, ...{ deleting: true } };
        const action = usersActions.deleteUserFailure();
        const newState = usersReducers(oldState, action);
        const expectedState = { ...usersInit, ...{ deleting: false } };
        expect(newState).toEqual(expectedState);
      });
    });
    describe('Delete User dialog', () => {
      it('Should set deleting to user id', () => {
        const userId = 5465;
        const action = usersActions.openUserDeleteDialog(userId);
        const newState = usersReducers(usersInit, action);
        const expectedState = { ...usersInit, ...{ deleting: userId } };
        expect(newState).toEqual(expectedState);
      });
      it('Should set deleting to false', () => {
        const oldState = { ...usersInit, ...{ deleting: 324 } };
        const action = usersActions.closeUserDeleteDialog();
        const newState = usersReducers(oldState, action);
        const expectedState = { ...usersInit, ...{ deleting: false } };
        expect(newState).toEqual(expectedState);
      });
    });
  });
  describe('Add user', () => {
    const data = {
      userLevel: 0,
      fullName: 'Petar Test',
      password: '1234567890',
      active: true,
      userType: 'Guest',
      email: 'petar45@ptt.yu'
    };
    describe('Add user request', () => {
      it('Should set loading to true', () => {
        const action = usersActions.addUserRequest(data);
        const newState = usersReducers(usersInit, action);
        const expectedState = { ...usersInit, ...{ loading: true } };
        expect(newState).toEqual(expectedState);
      });
    });

    describe('Add user success', () => {
      const oldState = { ...usersInit, ...{ list: serveDataMock, loading: true } };
      const serverData = { ...data, ...{ userId: 123 } };
      const action = usersActions.addUserSuccess(serverData);
      const newState = usersReducers(oldState, action);
      const addedUser = newState.list.filter(u => u.userId === serverData.userId);
      it('Should add new user to state', () => {
        expect(addedUser.length).toBe(1);
      });
      it('Loading property should be false', () => {
        expect(newState.loading).toBe(false);
      });
    });

    describe('Add user failure', () => {
      it('Should set loading property of state to false', () => {
        const oldState = { ...usersInit, ...{ loading: true } };
        const action = usersActions.addUserFailure();
        const newState = usersReducers(oldState, action);
        expect(newState).toEqual(usersInit);
      });
    });

    describe('Add User Dialog', () => {
      it('Should set adding property to true', () => {
        const action = usersActions.openUserAddDialog();
        const newState = usersReducers(usersInit, action);
        const expectedState = { ...usersInit, ...{ adding: true } };
        expect(newState).toEqual(expectedState);
      });
      it('Should set adding property to false', () => {
        const oldState = { ...usersInit, ...{ adding: true } };
        const action = usersActions.closeUserAddDialog();
        const newState = usersReducers(oldState, action);
        expect(newState).toEqual(usersInit);
      });
    });
  });
  describe('Update user', () => {
    describe('Update user request', () => {
      it('Update user request -Should set loading property to true', () => {
        const action = usersActions.updateUserRequest({});
        const newState = usersReducers(usersInit, action);
        const expectedState = { ...usersInit, ...{ loading: true } };
        expect(newState).toEqual(expectedState);
      });
    });
    describe('Update user success', () => {
      const oldState = { ...usersInit, ...{ list: serveDataMock, loading: true } };
      const updateData = { fullName: 'Update Andrew Hershey' };
      const userData = { ...serveDataMock[0], ...updateData };
      const action = usersActions.updateUserSuccess(userData);
      const newState = usersReducers(oldState, action);
      it('Should loading property be false', () => {
        expect(newState.loading).toBe(false);
      });
      it('Update user success - should update user data', () => {
        expect(newState.list[0]).toEqual(userData);
      });
      it('Should has proper list', () => {
        const expectedList = oldState.list.map(u => {
          if (u.userId === userData.userId) {
            return { ...u, ...userData };
          }
          return u;
        });
        expect(newState.list).toEqual(expectedList);
      });
    });
    describe('Update user failure', () => {
      it('Should has loading property false', () => {
        const oldState = { ...usersInit, ...{ loading: true } };
        const action = usersActions.updateUserFailure();
        const newState = usersReducers(oldState, action);
        expect(newState).toEqual(usersInit);
      });
    });
    describe('Suspending/Restore dialog', () => {
      it('Should set changingActive property to true', () => {
        const userId = 7787;
        const action = usersActions.openUserSuspendDialog(userId);
        const newState = usersReducers(usersInit, action);
        expect(newState.changingActive).toBe(userId);
      });
      it('Should set changingActive property to false', () => {
        const oldState = { ...usersInit, ...{ changingActive: true } };
        const action = usersActions.closeUserSuspendDialog();
        const newState = usersReducers(oldState, action);
        expect(newState.changingActive).toBe(false);
      });
    });
    describe('Edit User Dialog', () => {
      const userId = 4564546;
      it('Should set state editing to userId', () => {
        const action = usersActions.openUserEditDialog(userId);
        const newState = usersReducers(usersInit, action);
        const expectedState = { ...usersInit, ...{ editing: userId } };
        expect(newState).toEqual(expectedState);
      });
      it('Should set state editing to false', () => {
        const oldState = { ...usersInit, ...{ editing: userId } };
        const action = usersActions.closeUserEditDialog();
        const newState = usersReducers(oldState, action);
        expect(newState).toEqual(usersInit);
      });
    });
    describe('Reset User Password Dialog', () => {
      const userId = 45646;
      it('Should set resettingPassword to userId ', () => {
        const action = usersActions.openUserResetPasswordDialog(userId);
        const newState = usersReducers(usersInit, action);
        const expectedState = { ...usersInit, ...{ resettingPassword: userId } };
        expect(newState).toEqual(expectedState);
      });
      it('Should set resettingPassword to false', () => {
        const oldState = { ...usersInit, ...{ resettingPassword: userId } };
        const action = usersActions.closeUserResetPasswordDialog();
        const newState = usersReducers(oldState, action);
        expect(newState).toEqual(usersInit);
      });
    });
  });
});
