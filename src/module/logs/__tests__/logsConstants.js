import * as logsConst from '../logsConstants';

describe('News Constants', () => {
  it('Should be defined NEWS_REQUEST', () => {
    expect(logsConst.LOGS_REQUEST).toBeDefined();
  });
  it('Should be defined NEWS_SUCCESS', () => {
    expect(logsConst.LOGS_SUCCESS).toBeDefined();
  });
  it('Should be defined NEWS_FAILURE', () => {
    expect(logsConst.LOGS_FAILURE).toBeDefined();
  });
});
