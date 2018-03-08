jest.mock('../../../service/request');
import qs from 'qs';

import { fetchNews } from '../newsServices';

describe('News services', () => {
  describe('Fetch News', () => {
    it('Should be defined fetchNews service', () => {
      expect(fetchNews).toBeDefined();
    });
    it('Should has proper request options', done => {
      const data = { limit: 1, homePage: 1 };
      fetchNews(data).then(res => {
        expect(res).toEqual({
          url: 'news',
          method: 'post',
          data: qs.stringify(data)
        });
        done();
      });
    });
  });
});
