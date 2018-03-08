import accountReducer from '../accountReducer';
import {
  fetchAccountRrequest,
  fetchAccountSuccess,
  fetchAccountFailure,
  updateAccountRequest,
  updateAccountSuccess,
  updateAccountFailure,
  removeAccount,
  transferStatusRequest,
  transferStatusSuccess,
  transferStatusFailure
} from '../../actions/accountActions';
import initialState from '../../../../store/initialState';

const accountState = initialState.account;
const data = {
  active: true,
  email: 'anuj.gakhar@gmail.com',
  fullName: 'Anuj Gakhar',
  userId: 6064,
  userType: 'Support'
};
describe('Account Reducer', () => {
  describe('Fetch data', () => {
    it('Fetch data request.The property loadingData should has value true', () => {
      const action = fetchAccountRrequest();
      const newState = accountReducer(accountState, action);
      const expectedState = { ...accountState, ...{ loadingData: true } };
      expect(newState).toEqual(expectedState);
    });
    it('Success fetch data.The state should has account data', () => {
      const oldState = { ...accountState, ...{ loadingData: true } };
      const action = fetchAccountSuccess(data);
      const newState = accountReducer(oldState, action);
      const expectedState = {
        ...accountState,
        ...data,
        ...{ isFetchedData: true }
      };
      expect(newState).toEqual(expectedState);
    });
    it('Failure fetch data. The loadingError should has value', () => {
      const oldState = { ...accountState, ...{ loadingData: true } };
      const error = 'some error message';
      const action = fetchAccountFailure(error);
      const newState = accountReducer(oldState, action);
      const expectedState = {
        ...accountState,
        ...{ loadingError: error, isFetchedData: true }
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe('Update account', () => {
    it('Update account request', () => {
      const { fullName } = data;
      const action = updateAccountRequest({ fullName });
      const newState = accountReducer(accountState, action);
      const expectedState = { ...accountState, ...{ loadingData: true } };
      expect(newState).toEqual(expectedState);
    });
    it('Update account success', () => {
      const action = updateAccountSuccess(data);
      const oldState = { ...accountState, ...{ loadingData: true } };
      const newState = accountReducer(oldState, action);
      const expectedState = { ...accountState, ...data };
      expect(newState).toEqual(expectedState);
    });
    it('Update account failure', () => {
      const action = updateAccountFailure();
      const oldState = { ...accountState, ...{ loadingData: true } };
      const newState = accountReducer(oldState, action);
      const expectedState = { ...accountState, ...{ loadingData: false } };
      expect(newState).toEqual(expectedState);
    });
  });
  describe('Transfer status', () => {
    const data = { userId: 6842 };
    it('Transfer status request', () => {
      const action = transferStatusRequest(data);
      const newState = accountReducer({ isTransfer: false }, action);
      expect(newState).toEqual({ isTransfer: true });
    });
    it('Transfer status success', () => {
      const action = transferStatusSuccess(data);
      const newState = accountReducer({ isTransfer: true }, action);
      expect(newState).toEqual({ isTransfer: false });
    });
    it('Transfer status failure', () => {
      const action = transferStatusFailure();
      const newState = accountReducer({ isTransfer: true }, action);
      expect(newState).toEqual({ isTransfer: false });
    });
  });
  it('Remove account', () => {
    const oldState = { ...accountState, ...data };
    const newState = accountReducer(oldState, removeAccount());
    expect(newState).toEqual(accountState);
  });
});
