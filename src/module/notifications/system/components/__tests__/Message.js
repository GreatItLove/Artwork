import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { MessageTest as Message } from '../Message';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../../../config/general';

describe('Message', () => {
  it('Message error snapshot', () => {
    const removeMessage = jest.fn();
    const messageType = SYS_MESSAGE_TYPE_ERROR;
    const message = 'some error message';
    const wrapper = shallow(<Message {...{ removeMessage, messageType, message }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
