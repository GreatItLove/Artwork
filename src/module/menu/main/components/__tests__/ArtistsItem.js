import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ArtistsItem from '../ArtistsItem';

describe('ArtistsItem', () => {
  it('Snapshot of ArtistsItem', () => {
    const wrapper = shallow(<ArtistsItem style={{}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
