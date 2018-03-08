import * as sysMessageConstants from '../sysMessageConstants';

describe('System Message Constants', () => {
  it('Should be defined ADD_SYS_MESSAGE ', () => {
    expect(sysMessageConstants.ADD_SYS_MESSAGE).toBeDefined();
  });
  it('Should be defined REMOVE_SYS_MESSAGE', () => {
    expect(sysMessageConstants.REMOVE_SYS_MESSAGE).toBeDefined();
  });
});
