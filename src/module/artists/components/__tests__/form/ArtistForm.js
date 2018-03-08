import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

import ArtistForm from '../../form/ArtistForm';

describe('ArtistForm', () => {
  it('Snapshot of ArtistForm', () => {
    const props = {
      handleSubmit: jest.fn(),
      submitForm: jest.fn(),
    };
    const wrapper = shallow(<ArtistForm {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
