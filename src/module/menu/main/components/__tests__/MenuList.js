/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJONS from 'enzyme-to-json';

import MenuList from '../MenuList';

describe('MenuList Component', () => {
  it('Shallow snapshot', () => {
    const wrapper = shallow(<MenuList />);
    expect(toJONS(wrapper)).toMatchSnapshot();
  });
});
