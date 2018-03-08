import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import RadioGroup from '../../form/RadioGroup';

describe('RadioGroup', () => {
  it('Should be same snapshot', () => {
    const input = {};
    const name = 'somename';
    const wrapper = shallow(<RadioGroup {...{ input, name }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
