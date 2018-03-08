import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ActionsButton from '../ActionsButton';

describe('ActionsButton', () => {
  it('Snapshop of ActionsButton', () => {
    const wrapper = shallow(<ActionsButton />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
