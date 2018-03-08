import * as constants from '../settingsConstants';

describe('Settings Constants', () => {
  it('Should be defined ADD_SETTINGS', () => {
    expect(constants.ADD_SETTINGS).toBeDefined();
  });
  it('Should be defined REMOVE_SETTINGS', () => {
    expect(constants.REMOVE_SETTINGS).toBeDefined();
  });
});
