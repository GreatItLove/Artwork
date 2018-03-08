import contactReducers from '../contactReducers';
import * as contactActions from '../contactActions';
import initialState from '../../../store/initialState';

const usersInit = initialState.contact;
const contacts = [
  {
    "active": true,
    "address": "",
    "address2": "",
    "altAddress": "",
    "altAddress2": "",
    "altCity": "",
    "altEMail": "",
    "altFax": "",
    "altPhone": "",
    "altPhone2": "",
    "altState": "",
    "altZip": "",
    "artistsId": 0,
    "artistsList": true,
    "beq": false,
    "birthday": "",
    "buyer": false,
    "buyerList": "",
    "category": "ContactUs",
    "cell": "",
    "city": "",
    "company": "",
    "consignorId": 0,
    "contactName": "",
    "contactPhone": "",
    "contactType": "",
    "country": "",
    "customerId": 4104,
    "customerType": "Website_Contact",
    "dateAdded": "1416237829",
    "dateReg": "1416237829",
    "dateUnSubscribed": "",
    "dateUpdated": "1416237829",
    "dateViewedBE": "",
    "done": false,
    "email": "vangoghbuptert@outlook.com",
    "emailList": false,
    "fax": "",
    "firstName": "",
    "grossSpent": "0",
    "howFound": "",
    "importDate": "",
    "invited": false,
    "isArtist": false,
    "isConsignee": false,
    "isConsignor": false,
    "isContributor": false,
    "lastName": "",
    "maId": 1859,
    "mailList": false,
    "marketing": "Website_Contact,ContactUs",
    "middle": "",
    "phone": "",
    "phone2": "",
    "private": false,
    "qb": false,
    "qbChangeDate": "",
    "qualities": "",
    "region": "",
    "role": "",
    "salespersonId": 0,
    "salutation": "",
    "specialInterest": "",
    "specialList": true,
    "state": "",
    "subscribeList": "",
    "url": "",
    "valid": true,
    "zip": ""
  },
];
const pagination = {
  totalPages: 22,
  totalRecordCount: 261,
  recordsPerPage: 12,
  currentPage: 1,
};
describe('contact reducer', () => {

  it('Fetch Contact Request', () => {
    const action = contactActions.fetchContactRequest({});
    const newState = contactReducers(usersInit, action);
    const expectedState = { ...usersInit, ...{ fetching: true } };
    expect(newState).toEqual(expectedState);
  });

  it('Fetch Contact Success', () => {
    const oldState = { ...usersInit, ...{ fetching: true } };
    const action = contactActions.fetchContactSuccess({
      contacts,
      pagination
    });
    const newState = contactReducers(oldState, action);
    const expectedState = {
      ...oldState,
      ...{ fetching: false, list: contacts, pagination }
    };
    expect(newState).toEqual(expectedState);
  });

  it('Fetch Contact Failure', () => {
    const oldState = { ...usersInit, ...{ fetching: true } };
    const action = contactActions.fetchContactFailure({});
    const newState = contactReducers(oldState, action);
    const expectedState = { ...usersInit, ...{ fetching: false } };
    expect(newState).toEqual(expectedState);
  });

  it('Open Contact Add Dialog', () => {
    const action = contactActions.openContactAddDialog({});
    const newState = contactReducers(usersInit, action);
    const expectedState = { ...usersInit, ...{ adding: true } };
    expect(newState).toEqual(expectedState);
  });

  it('Close Contact Add Dialog', () => {
    const oldState = { ...usersInit, ...{ adding: true } };
    const action = contactActions.closeContactAddDialog({});
    const newState = contactReducers(oldState, action);
    const expectedState = { ...oldState, ...{ adding: false } };
    expect(newState).toEqual(expectedState);
  });

  it('Update search filter', () => {
    const oldState = { ...usersInit, ...{ searchFilter: {} } };
    const action = contactActions.updateSearchFilter({ limit: 10 });
    const newState = contactReducers(oldState, action);
    const expectedState = { ...oldState, ...{ searchFilter: { limit: 10 } } };
    expect(newState).toEqual(expectedState);
  });

  it('Switch contacts search', () => {
    const oldState = { ...usersInit, ...{ showingFilter: false } };
    const action = contactActions.switchContactsFilter();
    const newState = contactReducers(oldState, action);
    const expectedState = { ...oldState, ...{ showingFilter: true } };
    expect(newState).toEqual(expectedState);
  });
  it('fetchCategory request', () => {
    const action = contactActions.fetchCategoryRequest();
    const newState = contactReducers(usersInit, action);
    const expectedState = { ...usersInit, ...{ fetchingCategory: true } };
    expect(newState).toEqual(expectedState);
  });
  it('fetchCategory success', () => {
    const category = ["Artiste", "ArtworkInquiry", "ContactUs", "Email List A-M", "Email List N_Z", "Email List N-Z", "IsArtist", "IsConsignor_IsArtist", "MyCollection", "RSA_Collector", "Subscribe", "ThirdParty_Collector"]
    const oldState = { ...usersInit, ...{ fetchingCategory: true } };
    const action = contactActions.fetchCategorySuccess(category);
    const newState = contactReducers(oldState, action);
    const expectedState = { ...oldState, ...{ fetchingCategory: false, category: category } };
    expect(newState).toEqual(expectedState);
  });
  it('fetchCategory failure', () => {
    const oldState = { ...usersInit, ...{ fetchingCategory: true } };
    const action = contactActions.fetchCategoryFailure();
    const newState = contactReducers(oldState, action);
    const expectedState = { ...oldState, ...{ fetchingCategory: false } };
    expect(newState).toEqual(expectedState);
  });
});
