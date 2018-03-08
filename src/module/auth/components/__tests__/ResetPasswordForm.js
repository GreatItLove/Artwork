import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ResetPasswordForm from '../ResetPasswordForm';

describe('ResetPasswordForm', () => {
  const t = key => key;
  const resetPassword = jest.fn();
  const handleSubmit = jest.fn();
  it('Should has same snapshot', () => {
    const wrapper = shallow(<ResetPasswordForm {...{ t, handleSubmit, resetPassword }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
