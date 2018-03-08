import { ADD_SYS_MESSAGE, REMOVE_SYS_MESSAGE } from './sysMessageConstants';

function sysMessage(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_SYS_MESSAGE:
      return {
        ...state,
        ...{ message: payload.message, messageType: payload.messageType }
      };
    case REMOVE_SYS_MESSAGE:
      return { ...state, ...{ message: '', messageType: '' } };
    default:
      return state;
  }
}

export default sysMessage;
