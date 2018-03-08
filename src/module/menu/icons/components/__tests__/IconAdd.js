import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { IconAddTest as IconAdd } from '../IconAdd';
import muiTheme from '../../../../../muiTheme';

describe('Icon Add', () => {
  it('Snapshot of IconAdd', () => {
    const wrapper = shallow(<IconAdd muiTheme={muiTheme} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
