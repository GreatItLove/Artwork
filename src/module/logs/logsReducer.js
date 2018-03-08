import updateObject from '../../utility/updateObject';
import { LOGS_REQUEST, LOGS_SUCCESS, LOGS_FAILURE } from './logsConstants';

const logs = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGS_REQUEST:
      return updateObject(state, {
        logsLoading: true,
        logsData: [],
        logsError: ''
      });
    case LOGS_SUCCESS:
      return updateObject(state, {
        logsLoading: false,
        logsData: payload,
        logsError: ''
      });
    case LOGS_FAILURE:
      return updateObject(state, {
        logsLoading: false,
        logsData: [],
        logsError: payload
      });
    default:
      return state;
  }
};

export default logs;
