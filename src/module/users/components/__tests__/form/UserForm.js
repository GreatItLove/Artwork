import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import UserForm from '../../form/UserForm';

describe('UserForm', () => {
  it('Snapshot of UserForm', () => {
    const props = {
      handleSubmit: jest.fn(),
      submitForm: jest.fn()
    };
    const wrapper = shallow(<UserForm {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
