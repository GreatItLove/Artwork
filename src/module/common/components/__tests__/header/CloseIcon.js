import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CloseIcon from '../../header/AddIcon';

describe('CloseIcon', () => {
  it('Snapshot of CloseIcon', () => {
    const wrapper = shallow(<CloseIcon closeDialog={jest.fn()} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
