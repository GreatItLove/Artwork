import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import HeaderRightActionIcons from '../../header/HeaderRightActionIcons';

describe('HeaderRightActionIcons', () => {
  it('Snapshot of HeaderRightActionIcons', () => {
    const wrapper = shallow(<HeaderRightActionIcons />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
