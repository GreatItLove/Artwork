import * as generalConst from '../general';

describe('General constants', () => {
  it('Should be defined IMAGE_BASE_PATH', () => {
    expect(generalConst.IMAGE_BASE_PATH).toBeDefined();
  });

  it('Should be defined SYS_MESSAGE_TYPE_ERROR', () => {
    expect(generalConst.SYS_MESSAGE_TYPE_ERROR).toBeDefined();
  });
  it('Should be defined SYS_MESSAGE_TYPE_SUCCESS', () => {
    expect(generalConst.SYS_MESSAGE_TYPE_SUCCESS).toBeDefined();
  });
  it('Should be defined SYS_MESSAGE_TYPE_INFO', () => {
    expect(generalConst.SYS_MESSAGE_TYPE_INFO).toBeDefined();
  });
});
