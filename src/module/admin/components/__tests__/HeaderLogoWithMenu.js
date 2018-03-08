/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { HeaderLogoWithMenuTest as HeaderLogoWithMenu } from '../HeaderLogoWithMenu';

describe('HeaderLogoWithMenu component', () => {
  it('Shallow snapshot', () => {
    const organization = 'demo galery';
    const toggleMenu = jest.fn();
    const wrapper = shallow(<HeaderLogoWithMenu {...{ organization, toggleMenu }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
