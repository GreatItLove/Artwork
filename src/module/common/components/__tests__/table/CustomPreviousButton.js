import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CustomPreviousButton from '../../table/CustomPreviousButton';

describe('CustomPreviousButton', () => {
  const props = {
    className: 'someClass',
    style: {},
    hasPrevious: true,
    onClick: jest.fn()
  };
  it('Snapshot of CustomPreviousButton with hasPrevious', () => {
    const wrapper = shallow(<CustomPreviousButton {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Snapshot of CustomPreviousButton without hasPrevious', () => {
    const newProps = { ...props, ...{ hasPrevious: false } };
    const wrapper = shallow(<CustomPreviousButton {...newProps} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
