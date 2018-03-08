import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CustomNextButton from '../../table/CustomNextButton';

describe('CustomNextButton', () => {
  const props = {
    className: 'someClass',
    style: {},
    hasNext: true,
    onClick: jest.fn()
  };
  it('Snapshot of CustomNextButton with has next', () => {
    const wrapper = shallow(<CustomNextButton {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('Snapshot of CustomNextButton without has next', () => {
    const newProps = { ...props, ...{ hasNext: false } };
    const wrapper = shallow(<CustomNextButton {...newProps} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
