import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchLogs as fetchLogsServices } from '../../logsServices';
import { fetchLogsSuccess, fetchLogsFailure } from '../../logsActions';
import { LOGS_REQUEST, LOGS_SUCCESS, LOGS_FAILURE } from '../../logsConstants';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../../config/general';
import { addSysMessage } from '../../../notifications/system/sysMessageAction';
import serverMessageHandler from '../../../../i18n/serverMessageHandler';
import logsSagas, { fetchLogs } from '../logsSagas';

describe('Logs Saga', () => {
  describe('Fetch logs', () => {
    const action = { payload: { limit: 5 } };
    const serverError = {
      error: {
        messages: [
          {
            severity: 2,
            errorcode: 'AWM109'
          }
        ],
        status: {
          code: 2
        }
      }
    };
    const serverDataMock = {
      response: {
        data: {
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
        },
        pagination: {
          totalPages: 8,
          totalRecordCount: 147,
          recordsPerPage: '20',
          currentPage: 1
        }
      },
      status: {
        code: 0
      }
    };
    const generator = fetchLogs(action);
    describe('Fetch logs success', () => {
      it('Should call API', () => {
        const next = generator.next();
        expect(next.value).toEqual(call(fetchLogsServices, action.payload.limit));
      });

      it('Should emit success action', () => {
        const next = generator.next(serverDataMock);
        expect(next.value).toEqual(put(fetchLogsSuccess(serverDataMock.response.data.activity)));
      });
    });
    describe('Fetch logs failured', () => {
      const generator = fetchLogs(action);
      generator.next(serverError);
      it('Should emit add system message', () => {
        const next = generator.next(serverError);
        expect(next.value).toEqual(put(fetchLogsFailure(serverMessageHandler(serverError.error))));
      });
    });
  });
  describe('Watch logs', () => {
    const generator = logsSagas();
    it('Should return logs request', () => {
      const next = generator.next();
      expect(next.value).toEqual(takeLatest(LOGS_REQUEST, fetchLogs));
    });
  });
});
