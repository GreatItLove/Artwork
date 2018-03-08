import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ResetPasswordDialog from '../../dialogs/ResetPasswordDialog';

describe('ResetPasswordDialog', () => {
  it('Snapshot of ResetPasswordDialog', () => {
    const props = {
      resettingPassword: false,
      userId: 546546,
      closeResetPasswordDialog: jest.fn()
    };
    const wrapper = shallow(<ResetPasswordDialog {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
