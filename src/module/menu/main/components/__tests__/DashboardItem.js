import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { DashboardItemTest as DashboardItem } from '../DashboardItem';

describe('DashboardItem', () => {
  it('Snapshot of DashboardItem', () => {
    const style = {};
    const t = jest.fn();
    const wrapper = shallow(<DashboardItem {...{ style, t }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
