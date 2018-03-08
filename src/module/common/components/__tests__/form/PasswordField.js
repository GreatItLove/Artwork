import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import PasswordField from '../../form/PasswordField';

describe('PasswordField', () => {
  it('Snapshot of PasswordField', () => {
    const wrapper = shallow(<PasswordField />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
