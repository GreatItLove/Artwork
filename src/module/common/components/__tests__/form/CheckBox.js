import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CheckBox from '../../form/CheckBox';

describe('Checkbox', () => {
  it('Snapshot of Checkbox', () => {
    const meta = {};
    const input = {};
    const wrapper = shallow(<CheckBox {...{ meta, input }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
