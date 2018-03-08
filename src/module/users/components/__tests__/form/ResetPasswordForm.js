import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ResetPasswordForm from '../../form/ResetPasswordForm';

describe('ResetPasswordForm', () => {
  it('Snapshot of ResetPasswordForm', () => {
    const props = {
      handleSubmit: jest.fn(),
      submitForm: jest.fn(),
      closeDialog: jest.fn(),
      initialValues: {
        userId: 4646
      }
    };

    const wrapper = shallow(<ResetPasswordForm {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
