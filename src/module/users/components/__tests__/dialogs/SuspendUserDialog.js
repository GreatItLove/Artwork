import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SuspendUserDialog from '../../dialogs/SuspendUserDialog';
import muiTheme from '../../../../../../muiTheme';

describe('SuspendUserDialog', () => {
  it('Snapshot of SuspendUserDialog', () => {
    const props = {
      openDialog: true,
      user: {},
      closeDialog: jest.fn(),
      updateStatus: jest.fn(),
      muiTheme: muiTheme
    };
    const wrapper = shallow(<SuspendUserDialog {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
