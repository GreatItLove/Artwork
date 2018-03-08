import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Passwords from '../../form/Passwords';

describe('Paswords', () => {
  it('Snapshot of passwords', () => {
    const wrapper = shallow(<Passwords />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
