import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SubmitBtnLoader from '../../form/SubmitBtnLoader';

describe('SubmitBtnLoader', () => {
  it('SubmitBtnLoader snapshot btn', () => {
    const wrapper = shallow(<SubmitBtnLoader label="some label" loading={false} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('SubmitBtnLoader snapshot loading', () => {
    const wrapper = shallow(<SubmitBtnLoader label="some label" loading={true} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
