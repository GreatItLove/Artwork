import * as usersConstants from '../usersConstants';
import * as usersActions from '../usersActions';

describe('Users Actions', () => {
  describe('Fetch Users', () => {
    describe('fetchUsersRequest', () => {
      it('Should be defined fetchUsersRequest', () => {
        expect(usersActions.fetchUsersRequest).toBeDefined();
      });
      it('fetchUserActions should create proper action', () => {
        const data = { property1: 'some value' };
        const action = usersActions.fetchUsersRequest(data);
        expect(action).toEqual({
          type: usersConstants.FETCH_USERS_REQUEST,
          payload: data
        });
      });
    });

    describe('fetchUsersSuccess', () => {
      it('Should be defined action creator fetchUsersSuccess', () => {
        expect(usersActions.fetchUsersSuccess).toBeDefined();
      });
      it('Should create proper action', () => {
        const data = [{ userID: 12556 }];
        const action = usersActions.fetchUsersSuccess(data);
        expect(action).toEqual({
          type: usersConstants.FETCH_USERS_SUCCESS,
          payload: data
        });
      });
    });

    describe('fetchUsersFailure', () => {
      it('Should be defined fetchUsersFailure', () => {
        expect(usersActions.fetchUsersFailure).toBeDefined();
      });
      it('Should create proper action', () => {
        const action = usersActions.fetchUsersFailure();
        expect(action).toEqual({ type: usersConstants.FETCH_USERS_FAILURE });
      });
    });
  });
  describe('Delete user', () => {
    describe('Delete user  request', () => {
      it('Should be defined deleteUserRequest', () => {
        expect(usersActions.deleteUserRequest).toBeDefined();
      });
      it('Should create action for delete user', () => {
        const userId = 1565;
        const action = usersActions.deleteUserRequest(userId);
        expect(action).toEqual({
          type: usersConstants.DELETE_USER_REQUEST,
          payload: userId
        });
      });
    });
    describe('Delete user success', () => {
      it('should be defined action creator', () => {
        expect(usersActions.deleteUserSuccess).toBeDefined();
      });
      it('Should create action for delete user success', () => {
        const userId = 456456;
        const action = usersActions.deleteUserSuccess(userId);
        expect(action).toEqual({
          type: usersConstants.DELETE_USER_SUCCESS,
          payload: userId
        });
      });
    });
    describe('Delete user failure', () => {
      it('Should be defined action', () => {
        expect(usersActions.deleteUserFailure).toBeDefined();
      });

      it('Should create action for delete user failure', () => {
        const action = usersActions.deleteUserFailure();
        expect(action).toEqual({
          type: usersConstants.DELETE_USER_FAILURE
        });
      });
    });
    describe('Delete dialog', () => {
      describe('Open user delete dialog', () => {
        it('Shoulld be defined action', () => {
          expect(usersActions.openUserDeleteDialog).toBeDefined();
        });
        it('Should create proper action', () => {
          const userId = 3456;
          const action = usersActions.openUserDeleteDialog(userId);
          expect(action).toEqual({
            type: usersConstants.OPEN_USER_DELETE_DIALOG,
            payload: userId
          });
        });
      });
      describe('Close user delete dialog', () => {
        it('Should be defined', () => {
          expect(usersActions.closeUserDeleteDialog).toBeDefined();
        });
        it('Should create proper action', () => {
          expect(usersActions.closeUserDeleteDialog()).toEqual({
            type: usersConstants.CLOSE_USER_DELETE_DIALOG
          });
        });
      });
    });
  });
  describe('Add User', () => {
    const data = {
      userLevel: 0,
      fullName: 'Test Test',
      password: '1234567890',
      active: true,
      userType: 'Guest',
      email: 'petar45@ptt.yu'
    };
    describe('Add user request', () => {
      it('Should be defined action creator', () => {
        expect(usersActions.addUserRequest).toBeDefined();
      });
      it('Should create action for request', () => {
        const action = usersActions.addUserRequest(data);
        expect(action).toEqual({
          type: usersConstants.ADD_USER_REQUEST,
          payload: data
        });
      });
    });
    describe('Add user success', () => {
      it('Should be defined action creator', () => {
        expect(usersActions.addUserSuccess).toBeDefined();
      });
      it('Should return proper action', () => {
        const action = usersActions.addUserSuccess(data);
        expect(action).toEqual({
          type: usersConstants.ADD_USER_SUCCESS,
          payload: data
        });
      });
    });
    describe('Add user failure', () => {
      it('Should be defined action creator', () => {
        expect(usersActions.addUserFailure).toBeDefined();
      });
      it('Should create proper action', () => {
        const action = usersActions.addUserFailure();
        expect(action).toEqual({
          type: usersConstants.ADD_USER_FAILURE
        });
      });
    });

    describe('Add User Dialog', () => {
      it('Should create action for open dialog for add user', () => {
        const action = usersActions.openUserAddDialog();
        expect(action).toEqual({
          type: usersConstants.OPEN_USER_ADD_DIALOG
        });
      });
      it('Should create action for close dialog for add user', () => {
        const action = usersActions.closeUserAddDialog();
        expect(action).toEqual({
          type: usersConstants.CLOSE_USER_ADD_DIALOG
        });
      });
    });
  });
  describe('Update User', () => {
    const data = { email: 'petar@ptt.yu' };
    describe('Update user request', () => {
      it('Should be defined updateUserRequest action creator', () => {
        expect(usersActions.updateUserRequest).toBeDefined();
      });
      it('Should create proper action', () => {
        const action = usersActions.updateUserRequest(data);
        expect(action).toEqual({
          type: usersConstants.UPDATE_USER_REQUEST,
          payload: data
        });
      });
    });
    describe('Update user success', () => {
      it('Should be defined updateUserSuccess action creator', () => {
        expect(usersActions.updateUserSuccess).toBeDefined();
      });
      it('Should create proper action', () => {
        const action = usersActions.updateUserSuccess(data);
        expect(action).toEqual({
          type: usersConstants.UPDATE_USER_SUCCESS,
          payload: data
        });
      });
    });
    describe('Update user failure', () => {
      it('Should be defined userUpdateFailure', () => {
        expect(usersActions.addUserFailure).toBeDefined();
      });
      it('Should create proper action ', () => {
        const action = usersActions.updateUserFailure();
        expect(action).toEqual({
          type: usersConstants.UPDATE_USER_FAILURE
        });
      });
    });
    describe('Suspend Dialog', () => {
      it('Should be defined openUserSuspendDialog action creator', () => {
        expect(usersActions.openUserSuspendDialog).toBeDefined();
      });
      it('Open user supsend dialog should create proper action', () => {
        const userId = 4564;
        expect(usersActions.openUserSuspendDialog(userId)).toEqual({
          type: usersConstants.OPEN_USER_SUSPEND_DIALOG,
          payload: userId
        });
      });
      it('Should be defined closeUserSuspendDiaog', () => {
        expect(usersActions.closeUserSuspendDialog).toBeDefined();
      });
      it('Close user suspend dialog should create proper action', () => {
        expect(usersActions.closeUserSuspendDialog()).toEqual({
          type: usersConstants.CLOSE_USER_SUSPEND_DIALOG
        });
      });
    });
    describe('Edit User Dialog', () => {
      it('Should create action for open edit user dialog ', () => {
        const userId = 6546546;
        const action = usersActions.openUserEditDialog(userId);
        expect(action).toEqual({
          type: usersConstants.OPEN_USER_EDIT_DIALOG,
          payload: userId
        });
      });
      it('Should create action for close edit user dialog', () => {
        const action = usersActions.closeUserEditDialog();
        expect(action).toEqual({
          type: usersConstants.CLOSE_USER_EDIT_DIALOG
        });
      });
    });
    describe('Reset User Password Dialog', () => {
      it('Should create action for opening reset user password dialog', () => {
        const userId = 45465;
        const action = usersActions.openUserResetPasswordDialog(userId);
        expect(action).toEqual({
          type: usersConstants.OPEN_USER_RESET_PASSWORD_DIALOG,
          payload: userId
        });
      });
      it('Should create action for closing reset user password dialog', () => {
        const action = usersActions.closeUserResetPasswordDialog();
        expect(action).toEqual({
          type: usersConstants.CLOSE_USER_RESET_PASSWORD_DIALOG
        });
      });
    });
    describe('update Search Filter', () => {
      it('Should update search filter', () => {
        const search = {
          search: 'jawahar',
          userLevel: 4,
          userType: 'SA',
          active: true,
        };
        const action = usersActions.updateSearchFilter(search);
        expect(action).toEqual({
          type: usersConstants.UPDATE_USERS_SEARCH,
          payload: search,
        });
      });
    });
    describe('switch users filter', () => {
      it('Should switch users filter', () => {
        const action = usersActions.updateSearchFilter();
        expect(action).toEqual({
          type: usersConstants.SWITCH_USERS_FILTER,
        });
      });
    });
  });
});
