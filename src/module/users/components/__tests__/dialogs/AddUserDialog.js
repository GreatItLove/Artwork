import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AddUserDialog from '../../dialogs/AddUserDialog';

describe('AddUserDialog', () => {
  const props = {
    adding: true,
    closeAddDialog: jest.fn()
  };
  it('Snapshot of AddUserDialog when adding is true', () => {
    const wrapper = shallow(<AddUserDialog {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('Snapshot of AddUserDialog whan adding is false ', () => {
    const propsAddingFalse = { ...props, ...{ adding: false } };
    const wrapper = shallow(<AddUserDialog {...propsAddingFalse} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
