import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ArtworkItems from '../ArtworkItems';

describe('ArtworkItems', () => {
  it('Snapshot of ArtworkItems', () => {
    const wrapper = shallow(<ArtworkItems style={{}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
