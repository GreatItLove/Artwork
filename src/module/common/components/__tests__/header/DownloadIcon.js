import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import muiTheme from '../../../../../muiTheme';

import { DownloadIconTest as DownloadIcon } from '../../header/DownloadIcon';

describe('DownloadIcon', () => {
  it('Snapshot of DownloadIcon', () => {
    const wrapper = shallow(<DownloadIcon muiTheme={muiTheme} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
