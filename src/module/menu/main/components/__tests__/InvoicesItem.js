import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import InvoicesItem from '../InvoicesItem';

describe('InvoicesItem', () => {
  it('Snapshot of InvoicesItem', () => {
    const wrapper = shallow(<InvoicesItem style={{}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
