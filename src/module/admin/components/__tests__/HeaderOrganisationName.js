import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { HeaderOrganisationNameTest as HeaderOrganisationName } from '../HeaderOrganisationName';

describe('HeaderOrganisationName', () => {
  it('Should be same snapshot', () => {
    const wrapper = shallow(<HeaderOrganisationName organization="Test organisation name" />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
