import userFieldsValidation from '../userFieldsValidation';

const t = key => key;
const validation = userFieldsValidation(t);

describe('Validation', () => {
  describe('Full name', () => {
    it('Should not pass empty full name', () => {
      expect(validation.fullName()).toBeTruthy();
    });

    it('Should not pass full name greater than 50', () => {
      const longFullName = `UMKJ951uZfE7s5DkgRCH5VecTg2iaXQ0882QB6REjEnrDdhaMU
        nngSPrb0AVHRNStbTFI9EELOfoeTBMKfC8WoPhJSxJxAnxc3S2`;
      expect(validation.fullName(longFullName)).toBeTruthy();
    });

    it('Should pass validation', () => {
      expect(validation.fullName('Some name')).toBeFalsy();
    });
  });
  describe('Email', () => {
    it('Should not pass empty email', () => {
      expect(validation.email()).toBeTruthy();
    });

    it('Should not pass invalide email', () => {
      expect(validation.email('ema@cre')).toBeTruthy();
    });
    it('Should not pass email greater than 50 ', () => {
      const longEmail = `0uDGCDOZZj0HUxRHufVkSVGed1n435S8Fqhg6SOZLIFjJt6Jcu1@ptt.yu
`;
      expect(validation.email(longEmail)).toBeTruthy();
    });
    it('Should pass email validation', () => {
      expect(validation.email('petar@ptt.yu')).toBeFalsy();
    });
  });
  describe('Old password', () => {
    it('Should not pass empty value', () => {
      expect(validation.oldpassword()).toBeTruthy();
    });
    it('Should pass validation', () => {
      expect(validation.oldpassword('54646546')).toBeFalsy();
    });
  });
  describe('Password', () => {
    it('Should not pass empty password', () => {
      expect(validation.password()).toBeTruthy();
    });
    it('Should pass validation', () => {
      expect(validation.password('4544646')).toBeFalsy();
    });
  });
  describe('Confirm password', () => {
    it('Shoul not pass empty value', () => {
      expect(validation.confirmPassword()).toBeTruthy();
    });
    it('Should not pass if password and confirm password not match', () => {
      expect(validation.confirmPassword('54654', '545')).toBeTruthy();
    });
    it('Should pass validation', () => {
      expect(validation.confirmPassword('123', '123')).toBeFalsy();
    });
  });
});
