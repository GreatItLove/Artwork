/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toSON from 'enzyme-to-json';

import Footer from '../Footer';

describe('Footer component', () => {
  it('Shallow snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(toSON(wrapper)).toMatchSnapshot();
  });
});
