import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AuthLayout from '../AuthLayout';

describe('AuthLayout', () => {
  Date.now = jest.fn(() => 1487076708000);
  const TestWrappedComponent = () => <div>I am passed component</div>;
  const AuthPageComponent = AuthLayout(TestWrappedComponent);
  const wrapper = shallow(<AuthPageComponent />);

  it('Should has WrappedComponent', () => {
    expect(wrapper.find(TestWrappedComponent).length).toBe(1);
  });

  it('AuthLayout snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
