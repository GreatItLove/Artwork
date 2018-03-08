import * as newsConst from '../newsConstants';

describe('News Constants', () => {
  it('Should be defined NEWS_REQUEST', () => {
    expect(newsConst.NEWS_REQUEST).toBeDefined();
  });
  it('Should be defined NEWS_SUCCESS', () => {
    expect(newsConst.NEWS_SUCCESS).toBeDefined();
  });
  it('Should be defined NEWS_FAILURE', () => {
    expect(newsConst.NEWS_FAILURE).toBeDefined();
  });
});
