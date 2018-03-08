import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import LevelTransfer from '../LevelTransfer';

const account = {
  active: true,
  email: 'ahershey79@yahoo.com',
  fullName: 'Andrew Hershey',
  isFetchedData: true,
  loadingData: false,
  loadingError: false,
  userId: 6757,
  userLevel: 4,
  userType: 'SA'
};
const list = [
  {
    active: true,
    email: 'jawahar.n@mitrahsoft.com',
    fullName: 'jawahar',
    lastLogin: '',
    userId: 6842,
    userLevel: 4,
    userType: 'Admin'
  },
  {
    active: true,
    email: 'testlasd@dsgagjads.com',
    fullName: 'Tets Test22',
    lastLogin: '',
    userId: 6846,
    userLevel: 1,
    userType: 'Guest'
  }
];
const props = {
  list: list,
  account: account,
  resetTransferEmail: jest.fn(),
  t: key => key
};

describe('LevelTransfer', () => {
  it('Should be same snapshot', () => {
    const wrapper = shallow(<LevelTransfer {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
