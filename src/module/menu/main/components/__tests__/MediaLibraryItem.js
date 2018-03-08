import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import MediaLibraryItem from '../MediaLibraryItem';

describe('MediaLibraryItem', () => {
  it('Snapshot of MediaLibraryItem', () => {
    const wrapper = shallow(<MediaLibraryItem style={{}} styleChild={{}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
