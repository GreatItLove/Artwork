/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Header from '../Header';

describe('Header component', () => {
  it('Shallow snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
