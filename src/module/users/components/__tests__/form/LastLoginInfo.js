import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import LastloginInfo from '../../form/LastloginInfo';

describe('LastloginInfo', () => {
  it('Snapshot of LastloginInfo without initialvalues', () => {
    const props = {
      initialValues: {}
    };
    const wrapper = shallow(<LastloginInfo {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('Snapshot of LastloginInfo with initialvalues', () => {
    const props = {
      initialValues: {
        active: true,
        browserInfo: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0`,
        email: `ahershey79@yahoo.com`,
        fullName: `Andrew Hershey`,
        ip: `68.13.124.171`,
        lastLogin: `1501790500`,
        logins: ['1501790500', '1501790301'],
        numLogins: 3,
        userId: 6757,
        userLevel: 4,
        userType: `SA`
      }
    };
    const wrapper = shallow(<LastloginInfo {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
