import { LOGS_REQUEST, LOGS_SUCCESS, LOGS_FAILURE } from './logsConstants';

const fetchLogsRequest = data => ({
  type: LOGS_REQUEST,
  payload: data
});

const fetchLogsSuccess = data => ({
  type: LOGS_SUCCESS,
  payload: data
});

const fetchLogsFailure = data => ({
  type: LOGS_FAILURE,
  payload: data
});

export { fetchLogsRequest, fetchLogsSuccess, fetchLogsFailure };
