import { ADD_SYS_MESSAGE, REMOVE_SYS_MESSAGE } from '../sysMessageConstants';
import { addSysMessage, removeSysMessage } from '../sysMessageAction';

describe('System Message Action creator', () => {
  it('Should return proper Action for add system message', () => {
    const message = 'Some Message';
    const messageType = 'someMessageType';
    const action = addSysMessage(message, messageType);
    expect(action).toEqual({
      type: ADD_SYS_MESSAGE,
      payload: {
        message,
        messageType
      }
    });
  });

  it('Should return proper action for remove system message', () => {
    const action = removeSysMessage();
    expect(action).toEqual({
      type: REMOVE_SYS_MESSAGE
    });
  });
});
