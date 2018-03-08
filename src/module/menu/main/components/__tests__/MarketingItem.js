import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import MarketingItem from '../MarketingItem';

describe('MarketingItem', () => {
  it('Snapshot of MarketingItem', () => {
    const wrapper = shallow(<MarketingItem style={{}} styleChild={{}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
