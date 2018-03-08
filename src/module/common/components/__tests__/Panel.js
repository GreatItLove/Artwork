import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Panel from '../Panel';

const RightElement = () => <div>Right Element</div>;
describe('Panel', () => {
  it('Snapshot of Panel component', () => {
    const wrapper = shallow(<Panel />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Snapshot of Panle with right element', () => {
    const wrapper = shallow(<Panel rightElement={<RightElement />} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
