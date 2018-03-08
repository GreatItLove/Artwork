import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import muiTheme from '../../../../../muiTheme';

import { AddIconTest as AddIcon } from '../../header/AddIcon';

describe('AddIcon', () => {
  it('Snapshot of AddIcon', () => {
    const wrapper = shallow(<AddIcon openAddDialog={jest.fn()} muiTheme={muiTheme} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
