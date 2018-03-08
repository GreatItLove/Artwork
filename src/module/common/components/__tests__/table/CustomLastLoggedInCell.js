import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CustomLastLoggedInCell from '../../table/CustomLastLoggedInCell';

describe('Custom Last LoggedIn Cell', () => {
  it('Snapshot of CustomLastLoggedInCell with value', () => {
    const wrapper = shallow(<CustomLastLoggedInCell value="4654646" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Snapshot of CustomLastLoggedInCell without value', () => {
    const wrapper = shallow(<CustomLastLoggedInCell value=" " />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
