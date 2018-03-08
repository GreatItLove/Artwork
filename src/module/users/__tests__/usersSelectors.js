import {
  getUsers,
  getChangingActive,
  getAdding,
  getEditing,
  getResettingPassword,
  getUserForChangingActive,
  getUserById
} from '../usersSelectors';
import initialState from '../../../../store/initialState';

const mockUsersList = [
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
initialState.users.list = mockUsersList;
describe('Users Selector', () => {
  describe('getUsers', () => {
    it('Should be defined', () => {
      expect(getUsers).toBeDefined();
    });
    it('getUsers should return users list', () => {
      const list = getUsers(initialState);
      expect(list).toEqual(mockUsersList);
    });
  });
  describe('getChangingActive', () => {
    it('Should be defined', () => {
      expect(getChangingActive).toBeDefined();
    });
    it('Should return false', () => {
      expect(getChangingActive(initialState)).toBe(false);
    });
  });
  describe('getAdding', () => {
    it('Should be defined', () => {
      expect(getAdding).toBeDefined();
    });
    it('Should return false', () => {
      expect(getAdding(initialState)).toBe(false);
    });
  });
  describe('getEditing', () => {
    it('Should be defined', () => {
      expect(getEditing).toBeDefined();
    });
    it('Should return false', () => {
      expect(getEditing(initialState)).toBe(false);
    });
  });
  describe('getResettingPassword', () => {
    it('Should be defined', () => {
      expect(getResettingPassword).toBeDefined();
    });
    it('Should return false', () => {
      expect(getResettingPassword(initialState)).toBe(false);
    });
  });
  describe('Get user for changing active status', () => {
    it('Should return false', () => {
      const user = getUserForChangingActive(initialState);
      expect(user).toBe(false);
    });
    it('Should return user object', () => {
      initialState.users.changingActive = initialState.users.list[0].userId;
      const state = { ...initialState };
      const user = getUserForChangingActive(state);
      expect(user).toEqual(initialState.users.list[0]);
    });
  });
  describe('Get User by id', () => {
    it('Should found users by id', () => {
      const user = getUserById(initialState, 6733);
      expect(user).toEqual(initialState.users.list[0]);
    });
  });
});
