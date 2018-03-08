import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

import {CustomActionCellTest as CustomActionCell} from '../../table/CustomActionCell';
describe('Custom Action Cell', () => {
  it('Snapshot of CustomActionCell', () => {
    const props = {
      value: 156654,
      appDispatch: jest.fn(),
      rowData: {
        active: true,
      },
    };
    const wrapper = shallow(<CustomActionCell {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
