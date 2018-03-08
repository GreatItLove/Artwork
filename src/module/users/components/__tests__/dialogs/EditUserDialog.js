import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import EditUserDialog from '../../dialogs/EditUserDialog';

describe('EditUserDialog', () => {
  it('Snapshot of EditUserDialog', () => {
    const props = {
      userId: 456465,
      closeEditDialog: jest.fn(),
      editing: false
    };
    const wrapper = shallow(<EditUserDialog {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
