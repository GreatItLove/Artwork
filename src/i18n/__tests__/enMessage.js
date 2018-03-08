/* eslint-disable no-undef */
import enMessage from '../enMessage';

describe('i18n English', () => {
  it('Should be defined en property', () => {
    expect(enMessage.en).toBeDefined();
  });

  describe('en property', () => {
    it('Should has property auth', () => {
      expect(enMessage.en.auth).toBeDefined();
    });

    describe('auth property', () => {
      it('Should has property login', () => {
        expect(enMessage.en.auth.login).toBeDefined();
      });

      describe('login property', () => {
        it('Should has property formHeader', () => {
          expect(enMessage.en.auth.login.formHeader).toBeDefined();
        });
        it('Should has property email', () => {
          expect(enMessage.en.auth.login.emailLabel).toBeDefined();
        });
        it('Should has property passwordLabel', () => {
          expect(enMessage.en.auth.login.passwordLabel).toBeDefined();
        });
        it('Should has property forgotPassword', () => {
          expect(enMessage.en.auth.login.forgotPassword).toBeDefined();
        });
        it('Should has property register', () => {
          expect(enMessage.en.auth.login.register).toBeDefined();
        });
        it('Should has property startPageField', () => {
          expect(enMessage.en.auth.login.startPageField).toBeDefined();
        });
        it('Should has property startPageOption', () => {
          expect(enMessage.en.auth.login.startPageOption).toBeDefined();
        });
        describe('startPageOption property', () => {
          it('Should has property home', () => {
            expect(enMessage.en.auth.login.startPageOption.home).toBeDefined();
          });
          it('Should has property artists', () => {
            expect(enMessage.en.auth.login.startPageOption.artists).toBeDefined();
          });
          it('Should has property consignments', () => {
            expect(enMessage.en.auth.login.startPageOption.consignments).toBeDefined();
          });
          it('Should has property artwork', () => {
            expect(enMessage.en.auth.login.startPageOption.artwork).toBeDefined();
          });
          it('Should has property artworkAddWizard', () => {
            expect(enMessage.en.auth.login.startPageOption.artworkAddWizard).toBeDefined();
          });
          it('Should has property contacts', () => {
            expect(enMessage.en.auth.login.startPageOption.contacts).toBeDefined();
          });
          it('Should has property contactsAddWizard', () => {
            expect(enMessage.en.auth.login.startPageOption.contactsAddWizard).toBeDefined();
          });
          it('Should has property websiteSection', () => {
            expect(enMessage.en.auth.login.startPageOption.websiteSection).toBeDefined();
          });
          it('Should has property exhibitions', () => {
            expect(enMessage.en.auth.login.startPageOption.exhibitions).toBeDefined();
          });
          it('Should has property resources', () => {
            expect(enMessage.en.auth.login.startPageOption.resources).toBeDefined();
          });
          it('Should has property invoices', () => {
            expect(enMessage.en.auth.login.startPageOption.invoices).toBeDefined();
          });
          it('Should has property quickSale', () => {
            expect(enMessage.en.auth.login.startPageOption.quickSale).toBeDefined();
          });
          it('Should has property visitorToday', () => {
            expect(enMessage.en.auth.login.startPageOption.visitorToday).toBeDefined();
          });
          it('Should has property surveyResults', () => {
            expect(enMessage.en.auth.login.startPageOption.surveyResults).toBeDefined();
          });
        });
        it('Should has property submitBtn', () => {
          expect(enMessage.en.auth.login.submitBtn).toBeDefined();
        });
      });

      it('Should has property passwordForget', () => {
        expect(enMessage.en.auth.passwordForget).toBeDefined();
      });

      describe('passwordForget property', () => {
        it('Should has property submitBtn ', () => {
          expect(enMessage.en.auth.passwordForget.submitBtn).toBeDefined();
        });
        it('Should has property formHeader', () => {
          expect(enMessage.en.auth.passwordForget.formHeader).toBeDefined();
        });
        it('Should has property headerInfo', () => {
          expect(enMessage.en.auth.passwordForget.headerInfo).toBeDefined();
        });
        it('Should has property email', () => {
          expect(enMessage.en.auth.passwordForget.email).toBeDefined();
        });

        describe('email property', () => {
          it('Should has property field', () => {
            expect(enMessage.en.auth.passwordForget.email.field).toBeDefined();
          });

          it('Should has property errorRequired ', () => {
            expect(enMessage.en.auth.passwordForget.email.errorRequired).toBeDefined();
          });
        });
        it('Should has property backToLogin', () => {
          expect(enMessage.en.auth.passwordForget.backToLogin).toBeDefined();
        });
      });

      it('Should has property passwordReset', () => {
        expect(enMessage.en.auth.passwordReset).toBeDefined();
      });

      describe('passwordReset property', () => {
        it('Should has property submitBtn ', () => {
          expect(enMessage.en.auth.passwordReset.submitBtn).toBeDefined();
        });
        it('Should has property formHeader', () => {
          expect(enMessage.en.auth.passwordReset.formHeader).toBeDefined();
        });
        it('Should has property headerInfo', () => {
          expect(enMessage.en.auth.passwordReset.headerInfo).toBeDefined();
        });
        it('Should has property newPassword', () => {
          expect(enMessage.en.auth.passwordReset.newPassword).toBeDefined();
        });

        describe('newPassword property', () => {
          it('Should has property field', () => {
            expect(enMessage.en.auth.passwordReset.newPassword.field).toBeDefined();
          });
        });

        it('Should has confirmPassword', () => {
          expect(enMessage.en.auth.passwordReset.confirmPassword).toBeDefined();
        });

        describe('confirmPassword property', () => {
          it('Should has property field', () => {
            expect(enMessage.en.auth.passwordReset.confirmPassword.field).toBeDefined();
          });
        });
        it('Should has property backToLogin ', () => {
          expect(enMessage.en.auth.passwordReset.backToLogin).toBeDefined();
        });
      });
    });

    describe('app property', () => {
      it('Should be defined app property', () => {
        expect(enMessage.en.app).toBeDefined();
      });

      it('Should has property menuItems', () => {
        expect(enMessage.en.app.menuItems).toBeDefined();
      });

      describe('menuItems property', () => {
        it('Should has property dashboard', () => {
          expect(enMessage.en.app.menuItems.dashboard).toBeDefined();
        });

        it('Should has property logout', () => {
          expect(enMessage.en.app.menuItems.logout).toBeDefined();
        });
      });
    });

    describe('Account property', () => {
      it('Should be defined', () => {
        expect(enMessage.en.account).toBeDefined();
      });

      describe('Edit Account property', () => {
        it('should be defined editAccount', () => {
          expect(enMessage.en.account.editAccount).toBeDefined();
        });
        it('Should contains title property ', () => {
          expect(enMessage.en.account.editAccount.title).toBeDefined();
        });
        it('Should contains fullNameLabel property ', () => {
          expect(enMessage.en.account.editAccount.fullNameLabel).toBeDefined();
        });
        it('Should contains loginLabel property ', () => {
          expect(enMessage.en.account.editAccount.loginLabel).toBeDefined();
        });
        it('Should contains changePasswordLabel property ', () => {
          expect(enMessage.en.account.editAccount.changePasswordLabel).toBeDefined();
        });
        it('Should contains oldPasswordLabel property ', () => {
          expect(enMessage.en.account.editAccount.oldPasswordLabel).toBeDefined();
        });
        it('Should contains newPasswordLabel property ', () => {
          expect(enMessage.en.account.editAccount.newPasswordLabel).toBeDefined();
        });
        it('Should contains confirmPasswordLabel property ', () => {
          expect(enMessage.en.account.editAccount.confirmPasswordLabel).toBeDefined();
        });
        it('Should contains submitButtonLabel property ', () => {
          expect(enMessage.en.account.editAccount.submitButtonLabel).toBeDefined();
        });
        it('Should contains nothingForUpdateMessage property ', () => {
          expect(enMessage.en.account.editAccount.nothingForUpdateMessage).toBeDefined();
        });
      });
    });

    it('Should has validation property', () => {
      expect(enMessage.en.validation).toBeDefined();
    });
    describe('validation property ', () => {
      it('Should has required property ', () => {
        expect(enMessage.en.validation.required).toBeDefined();
      });
      it('Should has notMatch property ', () => {
        expect(enMessage.en.validation.notMatch).toBeDefined();
      });
    });
  });
});
