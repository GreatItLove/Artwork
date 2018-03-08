import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CustomActiveCell from '../../table/CustomActiveCell';

function createWrapper(value) {
  return shallow(<CustomActiveCell value={value} />);
}

describe('CustomActiveCell', () => {
  it('Snapshot with true value', () => {
    const wrapper = createWrapper(true);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Snapshot with false value', () => {
    const wrapper = createWrapper(false);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
