import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Notification from '../Notification';

describe('Notification', () => {
  const props = {
    logsLoading: true,
    logsData: [],
    logsError: '',
    fetchLogs: jest.fn(),
  };
  const logsData = [
    {
      browserInfo: `Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36`,
      customerId: `1859`,
      dateCreated: `1507019251`,
      details: `The user logged-in successfully.`,
      id: 366,
      ip: `127.0.0.1`,
      logType: `Successful Login`,
      resourceType: `login`,
      userId: `6733`,
    },
    {
      browserInfo: `Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36`,
      customerId: `1859`,
      dateCreated: `1507017081`,
      details: `The user logged-in successfully.`,
      id: 365,
      ip: `127.0.0.1`,
      logType: `Successful Login`,
      resourceType: `login`,
      userId: `6757`,
    },
  ];

  it('Snapshot of Notification when logsLoading is true', () => {
    const wrapper = shallow(<Notification {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('Snapshot of Notification when logsLoading is false ', () => {
    const propsLoadingFalse = {
      ...props,
      ...{
        logsLoading: false,
        logsData: logsData,
      },
    };
    const wrapper = shallow(<Notification {...propsLoadingFalse} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('Snapshot of Notification when error ', () => {
    const propsLogsError = {
      ...props,
      ...{
        logsLoading: false,
        logsError: 'err',
      },
    };
    const wrapper = shallow(<Notification {...propsLogsError} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
