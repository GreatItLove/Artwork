import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import EditAccountForm from '../EditAccountForm';

describe('EditAccountForm', () => {
  it('Should be same snapshot', () => {
    const props = {
      handleSubmit: jest.fn(),
      submitForm: jest.fn(),
      addSysMessage: jest.fn(),
      resetPasswords: jest.fn(),
      resetTransferEmail: jest.fn(),
      fetchUsersRequest: jest.fn(),
      fetchAccountRrequest: jest.fn(),
      t: key => key
    };
    const wrapper = shallow(<EditAccountForm {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
