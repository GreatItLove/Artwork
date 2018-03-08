import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';

import { PublicRouteTest as PublicRoute } from '../PublicRoute';

describe('PublicRoute', () => {
  const TestComponent = () => <p>Test Component</p>;

  it('Should return component', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/account']}>
        <PublicRoute startPage="/account" component={TestComponent} isLogged={false} />
      </MemoryRouter>
    );
    const element = wrapper.find('p');
    expect(element.length).toBe(1);
  });

  it('Should return Redirect component', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/a']}>
        <PublicRoute startPage="/somepage" component={TestComponent} isLogged={true} />
      </MemoryRouter>
    );
    const element = wrapper.find('p');
    expect(element.length).toBe(0);
  });
});
