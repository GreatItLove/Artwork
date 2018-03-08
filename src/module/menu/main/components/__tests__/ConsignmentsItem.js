import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ConsignmentsItem from '../ConsignmentsItem';

describe('ConsignmentsItem', () => {
  it('Snapshot of ConsignmentsItem', () => {
    const wrapper = shallow(<ConsignmentsItem style={{}} styleChild={{}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
