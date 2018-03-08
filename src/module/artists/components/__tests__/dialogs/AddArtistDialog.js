import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

import AddArtistDialog from '../../dialogs/AddArtistDialog';

describe('AddArtistDialog', () => {
  const props = {
    adding: true,
    closeAddDialog: jest.fn(),
  };
  it('Snapshot of AddArtistDialog when adding is true', () => {
    const wrapper = shallow(<AddArtistDialog {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('Snapshot of AddUserDialog whan adding is false ', () => {
    const propsAddingFalse = {...props, ...{adding: false}};
    const wrapper = shallow(<AddArtistDialog {...propsAddingFalse} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
