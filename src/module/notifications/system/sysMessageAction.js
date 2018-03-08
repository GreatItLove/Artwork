import { ADD_SYS_MESSAGE, REMOVE_SYS_MESSAGE } from './sysMessageConstants';

const addSysMessage = (message, messageType) => ({
  type: ADD_SYS_MESSAGE,
  payload: {
    message: message,
    messageType: messageType
  }
});

const removeSysMessage = () => ({
  type: REMOVE_SYS_MESSAGE
});

export { addSysMessage, removeSysMessage };
