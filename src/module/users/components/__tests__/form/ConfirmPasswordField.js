import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ConfirmPasswordField from '../../form/ConfirmPasswordField';

describe('Confirm Password Field', () => {
  it('Snapshot of ConfirmPasswordField', () => {
    const wrapper = shallow(<ConfirmPasswordField />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
