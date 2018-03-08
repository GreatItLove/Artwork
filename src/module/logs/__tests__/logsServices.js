jest.mock('../../../service/request');
import qs from 'qs';

import { fetchLogs } from '../logsServices';

describe('Logs services', () => {
  describe('Fetch logs', () => {
    it('Should be defined fetchLogs service', () => {
      expect(fetchLogs).toBeDefined();
    });
    it('Should has proper request options', done => {
      const data = { limit: 5 };
      fetchLogs(data.limit).then(res => {
        expect(res).toEqual({
          url: 'activity',
          method: 'post',
          data: qs.stringify(data)
        });
        done();
      });
    });
  });
});
