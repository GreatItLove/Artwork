import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import muiTheme from '../../../../../muiTheme';

import { PrintIconTest as PrintIcon } from '../../header/PrintIcon';

describe('PrintIcon', () => {
  it('Snapshot of PrintIcon', () => {
    const wrapper = shallow(<PrintIcon muiTheme={muiTheme} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
