import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SelectField from '../../form/SelectField';

describe('Select Field', () => {
  it('Snapshot of SelectFiled component', () => {
    const meta = {};
    const input = {};
    const wrapper = shallow(<SelectField {...{ meta, input }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
