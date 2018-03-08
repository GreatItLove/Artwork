import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ContactsItem from '../ContactsItem';

describe('ContactsItem', () => {
  it('Snapshot of ContactsItem', () => {
    const wrapper = shallow(<ContactsItem style={{}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
