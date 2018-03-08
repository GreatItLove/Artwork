import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { SystemMessageTest as SystemMessage } from '../SystemMessage';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../../../config/general';
import Message from '../Message';

describe('SystemMessage', () => {
  const message = 'some system message';
  const messageType = SYS_MESSAGE_TYPE_ERROR;
  const removeSysMessage = jest.fn();

  it('Should contain Message ', () => {
    const wrapper = shallow(<SystemMessage {...{ message, messageType, removeSysMessage }} />);
    expect(wrapper.find(Message).length).toBe(1);
  });

  it('Should not contain Message', () => {
    const wrapper = shallow(<SystemMessage {...{ message: '', messageType, removeSysMessage }} />);

    expect(wrapper.find(Message).length).toBe(0);
  });
});
