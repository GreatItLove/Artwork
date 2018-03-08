import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import InputField from '../../form/InputField';

describe('Input Field', () => {
  it('Snapshot of Input Field', () => {
    const meta = {};
    const input = {};
    const wrapper = shallow(<InputField {...{ meta, input }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
