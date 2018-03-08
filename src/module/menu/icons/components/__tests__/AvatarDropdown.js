import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { AvatarDropdownTest as AvatarDropdown } from '../AvatarDropdown';

describe('AvatarDropdown', () => {
  it('Shallow snapshot', () => {
    const logout = jest.fn();
    const logo = 'somelogo.png';
    const wrapper = shallow(<AvatarDropdown {...{ logo, logout }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
