import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ContactGriddle from '../../table/ContactGriddle';

const userList = [
  {
    active: true,
    firstName: '',
    middleName: '',
    lastName: '',
    email: 'vangoghbuptert@outlook.com',
    address: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    phone: '',
    zipCode: '',
    customerType: '',
    newType: '',
  },
];
const props = {
  list: [],
  pagination: { currentPage: 1, totalRecordCount: 0, recordsPerPage: 1, },
  appDispatch: jest.fn(),
  t: jest.fn(),
}

describe('Contact Griddle', () => {
  it(' Snapshot without data', () => {
    const wrapper = shallow(<ContactGriddle {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it(' Snapshot with data', () => {
    const dprops = { ...props, ...{ list: userList } };
    const wrapper = shallow(<ContactGriddle {...dprops} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

