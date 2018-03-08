import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import DeleteUserDialog from '../../dialogs/DeleteUserDialog';
import muiTheme from '../../../../../../muiTheme';

describe('DeleteUserDialog', () => {
  it('Snapshot of DeleteUserDialog', () => {
    const props = {
      openDialog: true,
      loading: false,
      userId: 6546,
      deleteUsers: jest.fn(),
      closeDialog: jest.fn(),
      muiTheme: muiTheme,
    };
    const wrapper = shallow(<DeleteUserDialog {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
