import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CustomPageDropdown from '../../table/CustomPageDropdown';

describe('CustomPageDropdown', () => {
  it('Snapshot of CustomPageDropdown without props', () => {
    const wrapper = shallow(<CustomPageDropdown />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('Snapshot of CustomPageDropdown with props', () => {
    const props = {
      maxPages: 10,
      currentPage: 2,
      setPage: jest.fn(),
      className: 'someClass',
      style: {}
    };
    const wrapper = shallow(<CustomPageDropdown {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
