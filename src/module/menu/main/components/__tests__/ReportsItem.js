import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ReportsItem from '../ReportsItem';

describe('ReportsItem', () => {
  it('Snapshot of ReportsItem', () => {
    const wrapper = shallow(<ReportsItem style={{}} styleChild={{}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
