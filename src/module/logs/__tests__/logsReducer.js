import logsReducer from '../logsReducer';
import initialState from '../../../store/initialState';
import { fetchLogsRequest, fetchLogsSuccess, fetchLogsFailure } from '../logsActions';

const logsData = {
  activity: [
    {
      browserInfo: `Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36`,
      customerId: `1859`,
      dateCreated: `1506314440`,
      details: `The user logged-in successfully.`,
      id: 14,
      ip: `127.0.0.1`,
      logType: `Successful Login`,
      resourceType: `login`,
      userId: '6733'
    },
    {
      browserInfo: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36`,
      customerId: `1859`,
      dateCreated: `1506270360`,
      details: `active column(s) values has been updated for userid 6850`,
      id: 146,
      ip: `127.0.0.1`,
      logType: `Edit resource`,
      resourceType: `user`,
      userId: `6064`
    },
    {
      browserInfo: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36`,
      customerId: `1859`,
      dateCreated: `1506270336`,
      details: `active column(s) values has been updated for userid 6850`,
      id: 145,
      ip: `127.0.0.1`,
      logType: `Edit resource`,
      resourceType: `user`,
      userId: `6064`
    },
    {
      browserInfo: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36`,
      customerId: `1859`,
      dateCreated: `1506266746`,
      details: `The user logged-in successfully.`,
      id: 144,
      ip: `127.0.0.1`,
      logType: `Successful Login`,
      resourceType: `login`,
      userId: `6064`
    },
    {
      browserInfo: `PostmanRuntime/6.3.2`,
      customerId: `1859`,
      dateCreated: `1506256998`,
      details: `The user logged-in successfully.`,
      id: 143,
      ip: `127.0.0.1`,
      logType: `Successful Login`,
      resourceType: `login`,
      userId: `6064`
    }
  ]
};
const logsInit = initialState.logs;

describe('Logs Reducer', () => {
  describe('Logs', () => {
    it('Should has proper state after fetchLogsRequest action', () => {
      const data = { limit: 1 };
      const newState = logsReducer(logsInit, fetchLogsRequest(data));
      const expectedState = { ...logsInit };
      expect(newState).toEqual(expectedState);
    });
    it('Should has proper state after fetchLogsSuccess state', () => {
      const newState = logsReducer(logsInit, fetchLogsSuccess(logsData));
      const expectedState = {
        logsData: logsData,
        logsLoading: false,
        logsError: ''
      };
      expect(newState).toEqual(expectedState);
    });
    it('Should has proper state after fetchLogsFailure action ', () => {
      const prevState = {
        ...logsInit,
        logsLoading: true
      };
      const newState = logsReducer(prevState, fetchLogsFailure('err'));
      expect(newState).toEqual({
        logsData: [],
        logsLoading: false,
        logsError: 'err'
      });
    });
  });
});
