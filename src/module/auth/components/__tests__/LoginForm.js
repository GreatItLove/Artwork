/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import LoginForm from '../../components/LoginForm';

describe('Login component', () => {
  const handleSubmit = jest.fn();
  const login = jest.fn();
  const t = key => key;
  const wrapper = shallow(<LoginForm {...{ handleSubmit, login, t }} />);
  it('Shallow snapshot initial state ', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
