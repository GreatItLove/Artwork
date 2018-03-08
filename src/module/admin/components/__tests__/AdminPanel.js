/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AdminPanel from '../AdminPanel';

describe('Admin component', () => {
  it('Shallow snapshot', () => {
    const wrapper = shallow(<AdminPanel />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
