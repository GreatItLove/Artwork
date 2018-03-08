import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import FooterNavgition from '../FooterNavgition';

describe('FooterNavgition', () => {
  it('Snapshot of FooterNavgition', () => {
    const wrapper = shallow(<FooterNavgition />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
