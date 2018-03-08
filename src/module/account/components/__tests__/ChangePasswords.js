import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ChangePasswords from '../ChangePasswords';

describe('ChangePasswords', () => {
  it('Snapshot when is state fasle', () => {
    const props = {
      t: key => key,
      resetPasswords: jest.fn()
    };
    const wrapper = shallow(<ChangePasswords {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
