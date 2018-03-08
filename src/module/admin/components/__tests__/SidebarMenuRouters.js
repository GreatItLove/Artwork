/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SidebarMenuRouters from '../SidebarMenuRouters';

describe('SidebarMenuRouters component', () => {
  it('Shallow snapshot', () => {
    const wrapper = shallow(<SidebarMenuRouters />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Shallow snapshot with close Drawer', () => {
    const wrapper = shallow(<SidebarMenuRouters />);
    wrapper.setState({ menuOpen: false });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
