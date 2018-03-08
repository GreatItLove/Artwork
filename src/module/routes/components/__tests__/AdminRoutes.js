/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AdminRoutes from '../AdminRoutes';

describe('AdminRoutes Component', () => {
  it('Shallow snapshot', () => {
    const wrapper = shallow(<AdminRoutes />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
