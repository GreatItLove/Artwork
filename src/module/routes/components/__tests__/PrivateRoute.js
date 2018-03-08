import React from 'react';
import { MemoryRouter, Redirect, StaticRouter } from 'react-router-dom';
import { render, mount, shallow } from 'enzyme';

import { PrivateRouteTest as PrivateRoute } from '../PrivateRoute';
console.error = jest.fn();
describe('PrivateRoute', () => {
  const TestComponent = () => <p>Test component</p>;

  it('Should return component', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/users/2']} initialIndex={0}>
        <PrivateRoute component={TestComponent} isLogged={true} />
      </MemoryRouter>
    );
    const element = wrapper.find('p');
    expect(element.length).toBe(1);
  });

  it('Should return Redirect', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/users/2']} initialIndex={0}>
        <PrivateRoute component={TestComponent} isLogged={false} />
      </MemoryRouter>
    );
    const element = wrapper.find(Redirect);
    expect(element.length).toBe(1);
  });
});
