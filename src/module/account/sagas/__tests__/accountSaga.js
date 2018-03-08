import { takeLatest, call, put } from 'redux-saga/effects';

import accountSaga, { fetchAccount, updateAccount } from '../accountSaga';
import {
  fetchAccount as fetchAccountService,
  updateAccount as updateAccountService
} from '../../services/accountService';
import { addSettings } from '../../actions/settingsActions';
import { addCustomer } from '../../actions/customerActions';
import {
  fetchAccountSuccess,
  fetchAccountFailure,
  updateAccountSuccess,
  updateAccountFailure
} from '../../actions/accountActions';
import { addSysMessage } from '../../../notifications/system/sysMessageAction';
import serverMessage from '../../../../i18n/serverMessage';
import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_SUCCESS } from '../../../../config/general';
import { FETCH_ACCOUNT_REQUEST, UPDATE_ACCOUNT_REQUEST } from '../../constants/accountConstants';

describe('Account sagas', () => {
  describe('Account Watch', () => {
    const generator = accountSaga();
    it('Should call fetch account generator', () => {
      const next = generator.next();

      expect(next.value).toEqual(takeLatest(FETCH_ACCOUNT_REQUEST, fetchAccount));
    });
    it('Should call update account', () => {
      const next = generator.next();
      expect(next.value).toEqual(takeLatest(UPDATE_ACCOUNT_REQUEST, updateAccount));
    });
  });

  describe('Fetch Account', () => {
    const serverResponse = {
      response: {
        data: {
          user: {
            active: true,
            email: 'anuj.gakhar@gmail.com',
            fullName: 'Anuj Gakhar',
            userId: 6064,
            userType: 'Support',
            customer: {
              active: true,
              customerId: 1859,
              customerType: 'Gallery',
              email: 'managedartwork1@gmail.com',
              logo3: 'MAW_LOGO_100px.jpg',
              logoIpad: 'MAW_LOGO_100px.jpg',
              organization: 'Demo Gallery',
              phone: '415-992-5503',
              siteAdministrator: 'Andrew Hershey'
            },
            settings: {
              bodyName: 'Artists',
              curFormat: 'Dollar',
              dimFormat: '1',
              folderName: 'DemoGallery',
              ipadUsers: '9',
              url: 'http://www.artworkmanagerdemo.com',
              uses3: false
            }
          }
        }
      }
    };
    const generator = fetchAccount();
    describe('Success API call', () => {
      it('Should call API to fetch data', () => {
        const next = generator.next(serverResponse);
        expect(next.value).toEqual(call(fetchAccountService));
      });
      it('It should emit action add settings', () => {
        const next = generator.next(serverResponse);
        expect(next.value).toEqual(put(addSettings(serverResponse.response.data.user.settings)));
      });
      it('Should emit acction add customer', () => {
        const next = generator.next(serverResponse);
        expect(next.value).toEqual(put(addCustomer(serverResponse.response.data.user.customer)));
      });
      it('Should emit fetch account success action', () => {
        const next = generator.next(serverResponse);
        const { settings, customer, ...account } = serverResponse.response.data.user;
        expect(next.value).toEqual(put(fetchAccountSuccess(account)));
      });
    });
    describe('Failure api call', () => {
      const serverResponse = {
        error: {
          messages: [
            {
              errorcode: 'AWM103',
              severity: 12
            }
          ],
          status: {
            code: 12
          }
        }
      };
      const generator = fetchAccount();
      generator.next(serverResponse);
      it('Should emit system message', () => {
        const next = generator.next(serverResponse);

        expect(next.value).toEqual(
          put(addSysMessage(serverMessage[serverResponse.error.messages[0].errorcode], SYS_MESSAGE_TYPE_ERROR))
        );
      });
      it('Should emit fetch account failure action', () => {
        const next = generator.next(serverResponse);
        expect(next.value).toEqual(put(fetchAccountFailure(serverMessage[serverResponse.error.messages[0].errorcode])));
      });
    });
  });

  describe('Update account', () => {
    const action = { payload: { fullName: 'Some full name' } };

    describe('Success update account', () => {
      const serverResponse = {
        response: {
          data: {
            user: {
              active: true,
              email: 'anuj.gakhar@gmail.com',
              fullName: 'anuj gakhar 22',
              userId: 6064,
              userLevel: 4,
              userType: 'Support'
            }
          }
        }
      };
      const generator = updateAccount(action);
      it('Should call account service ', () => {
        const next = generator.next(action);
        expect(next.value).toEqual(call(updateAccountService, action.payload));
      });
      it('Should emit system message', () => {
        const next = generator.next(serverResponse);
        expect(next.value).toEqual(
          put(addSysMessage('Your account has updated successfully', SYS_MESSAGE_TYPE_SUCCESS))
        );
      });
      it('Should emit update account success action', () => {
        const next = generator.next(serverResponse);
        expect(next.value).toEqual(put(updateAccountSuccess(serverResponse.response.data.user)));
      });
    });
    describe('Failure update account', () => {
      const serverResponse = {
        error: {
          messages: [
            {
              errorcode: 'AWM103',
              severity: 12
            }
          ],
          status: {
            code: 12
          }
        }
      };
      const generator = updateAccount(action);
      generator.next(serverResponse);
      it('Should emit system message action ', () => {
        const next = generator.next(serverResponse);
        expect(next.value).toEqual(
          put(addSysMessage(serverMessage[serverResponse.error.messages[0].errorcode], SYS_MESSAGE_TYPE_ERROR))
        );
      });
      it('Should emit update account failure action', () => {
        const next = generator.next(serverResponse);
        expect(next.value).toEqual(put(updateAccountFailure()));
      });
    });
  });
});
