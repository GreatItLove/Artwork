jest.mock('../../../service/request');
import qs from 'qs';
import * as contactService from '../contactServices';

describe(' Contact Services', () => {
  describe('fetchContact', () => {
    it('Should be defined fetch contact service', () => {
      expect(contactService.fetchContact).toBeDefined();
    });
    it('Should has proper request option', done => {
      const data = { limit: 1, offset: 0 };
      contactService.fetchContact(data).then(res => {
        expect(res).toEqual({
          url: 'contacts/list',
          method: 'post',
          data: qs.stringify(data),
        });
        done();
      });
    });
  });
});
