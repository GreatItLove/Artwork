import * as validationConsts from '../validation';

describe('Validation Constants', () => {
  it('Should be defined MAX_EMAIL_LENGTH', () => {
    expect(validationConsts.MAX_EMAIL_LENGTH).toBeDefined();
  });

  it('MAX_EMAIL_LENGTH should be 50', () => {
    expect(validationConsts.MAX_EMAIL_LENGTH).toBe(50);
  });

  it('Should be defined MAX_FULL_NAME_LENGTH', () => {
    expect(validationConsts.MAX_FULL_NAME_LENGTH).toBeDefined();
  });

  it('MAX_FULL_NAME_LENGTH should be 50', () => {
    expect(validationConsts.MAX_FULL_NAME_LENGTH).toBe(50);
  });
});
