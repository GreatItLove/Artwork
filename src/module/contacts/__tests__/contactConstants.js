import * as contactConstants from '../contactConstants';

describe(' Contact Constants', () => {
  it('should be defined FETCH_CONTACT_REQUEST', () => {
    expect(contactConstants.FETCH_CONTACT_REQUEST).toBeDefined();
  });
  it('should be defined  FETCH_CONTACT_SUCCESS', () => {
    expect(contactConstants.FETCH_CONTACT_SUCCESS).toBeDefined();
  });
  it('should be defined FETCH_CONTACT_FAILURE', () => {
    expect(contactConstants.FETCH_CONTACT_FAILURE).toBeDefined();
  });
  it('should be defined CLOSE_CONTACT_ADD_DIALOG', () => {
    expect(contactConstants.CLOSE_CONTACT_ADD_DIALOG).toBeDefined();
  });
  it('should be defined OPEN_CONTACT_ADD_DIALOG', () => {
    expect(contactConstants.OPEN_CONTACT_ADD_DIALOG).toBeDefined();
  });
  it('should be defined UPDATE_CONTACTS_SEARCH', () => {
    expect(contactConstants.UPDATE_CONTACTS_SEARCH).toBeDefined();
  });
  it('should be defined SWITCH_CONTACTS_FILTER', () => {
    expect(contactConstants.SWITCH_CONTACTS_FILTER).toBeDefined();
  });
  it('should be defined FETCH_CATEGORY_REQUEST', () => {
    expect(contactConstants.FETCH_CATEGORY_REQUEST).toBeDefined();
  });
  it('should be defined FETCH_CATEGORY_SUCCESS', () => {
    expect(contactConstants.FETCH_CATEGORY_SUCCESS).toBeDefined();
  });
  it('should be defined FETCH_CATEGORY_FAILURE', () => {
    expect(contactConstants.FETCH_CATEGORY_FAILURE).toBeDefined();
  });
});