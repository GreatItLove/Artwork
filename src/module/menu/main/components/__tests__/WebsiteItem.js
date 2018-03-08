import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import WebsiteItem from '../WebsiteItem';

describe('WebsiteItem', () => {
  it('Snapshot of WebsiteItem', () => {
    const wrapper = shallow(<WebsiteItem style={{}} styleChild={{}} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
