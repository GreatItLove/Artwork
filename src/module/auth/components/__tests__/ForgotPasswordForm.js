/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ForgotPasswordForm from '../../components/ForgotPasswordForm';

describe('ForgotPassword component', () => {
  const t = key => key;
  const handleSubmit = jest.fn();
  const forgotPassword = jest.fn();
  const wrapper = shallow(<ForgotPasswordForm {...{ t, forgotPassword, handleSubmit }} />);
  it('Shallow snapshot initial state', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
