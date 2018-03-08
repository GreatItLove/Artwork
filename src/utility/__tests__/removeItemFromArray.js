import removeItemFromArray from '../removeItemFromArray';

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

describe('Remove Item from array', () => {
  it('Should remove item rom array', () => {
    const newArray = removeItemFromArray(serveDataMock, 'userId', 6733);
    const expectedArray = newArray.filter(item => item.userId === 6733);
    expect(expectedArray.length).toBe(0);
  });
});
