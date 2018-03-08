import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import UsersTable from '../../table/UsersTable';

describe('UsersTable', () => {
  it('Snapshot of UsersTable', () => {
    const wrapper = shallow(<UsersTable />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
