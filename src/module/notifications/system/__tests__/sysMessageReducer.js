import sysMessage from '../sysMessageReducer';
import { addSysMessage, removeSysMessage } from '../sysMessageAction';
import initialState from '../../../../store/initialState';

const sysMessageInitState = initialState.sysMessage;

describe('System Message Reducer', () => {
  const message = 'some message';
  const messageType = 'someMessageType';
  it('State should contains system message', () => {
    const newState = sysMessage(sysMessageInitState, addSysMessage(message, messageType));
    expect(newState).toEqual({
      message,
      messageType
    });
  });
  it('Should has empty message state', () => {
    const initState = { ...sysMessageInitState, ...{ message, messageType } };
    const newState = sysMessage(initState, removeSysMessage());
    expect(newState).toEqual(sysMessageInitState);
  });
});
