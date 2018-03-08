import * as contactConstants from '../contactConstants';
import * as contactActions from '../contactActions';

describe(' contact action ', () => {
  describe(' fetchContactRequest ', () => {
    it(' should be defined fetchContactRequest ', () => {
      expect(contactConstants.FETCH_CONTACT_REQUEST).toBeDefined();
    });
    it('fetchContactRequest should make a action ', () => {
      const data = { property: 'some value' };
      const action = contactActions.fetchContactRequest(data);
      expect(action).toEqual({
        type: contactConstants.FETCH_CONTACT_REQUEST,
        payload: data,
      });
    });
  });

  describe('fetchContactSuccess', () => {
    it('should be defined FETCH_CONTACT_SUCCESS', () => {
      expect(contactConstants.FETCH_CONTACT_SUCCESS).toBeDefined();
    });
    it('fetchContactSuccess should make a action', () => {
      const data = { property: 'some value' };
      const action = contactActions.fetchContactSuccess(data);
      expect(action).toEqual({
        type: contactConstants.FETCH_CONTACT_SUCCESS,
        payload: data,
      });
    });
  });

  describe('fetchContactFailure', () => {
    it('should define FETCH_CONTACT_FAILURE', () => {
      expect(contactConstants.FETCH_CONTACT_FAILURE).toBeDefined();
    });
    it('fetchContactFailure should make a action', () => {
      const data = { property: 'some value' };
      const action = contactActions.fetchContactFailure(data);
      expect(action).toEqual({
        type: contactConstants.FETCH_CONTACT_FAILURE,
        payload: data,
      });
    });
  });

  describe('openContactAddDialog', () => {
    it('should define OPEN_CONTACT_ADD_DIALOG', () => {
      expect(contactConstants.OPEN_CONTACT_ADD_DIALOG).toBeDefined();
    });
    it('openContactAddDialog should make a action', () => {
      const action = contactActions.openContactAddDialog();
      expect(action).toEqual({
        type: contactConstants.OPEN_CONTACT_ADD_DIALOG,
      });
    });
  });

  describe('closeContactAddDialog', () => {
    it('should define CLOSE_CONTACT_ADD_DIALOG', () => {
      expect(contactConstants.CLOSE_CONTACT_ADD_DIALOG).toBeDefined();
    });
    it('closeContactAddDialog should make a action', () => {
      const action = contactActions.closeContactAddDialog();
      expect(action).toEqual({
        type: contactConstants.CLOSE_CONTACT_ADD_DIALOG,
      });
    });
  });

  describe('fetchCategory request', () => {
    it('should define FETCH_CATEGORY_REQUEST', () => {
      expect(contactConstants.FETCH_CATEGORY_REQUEST).toBeDefined();
    });
    it('fetchCategory request should make a action', () => {
      const action = contactActions.fetchCategoryRequest();
      expect(action).toEqual({
        type: contactConstants.FETCH_CATEGORY_REQUEST,
      });
    });
  });

  describe('fetchCategory success', () => {
    const category = ["Artiste", "ArtworkInquiry", "ContactUs", "Email List A-M", "Email List N_Z", "Email List N-Z", "IsArtist", "IsConsignor_IsArtist", "MyCollection", "RSA_Collector", "Subscribe", "ThirdParty_Collector"]
    it('should define FETCH_CATEGORY_SUCCESS', () => {
      expect(contactConstants.FETCH_CATEGORY_SUCCESS).toBeDefined();
    });
    it('fetchCategory success should make a action', () => {
      const action = contactActions.fetchCategorySuccess(category);
      expect(action).toEqual({
        type: contactConstants.FETCH_CATEGORY_SUCCESS,
        payload: category
      });
    });
  });

  describe('fetchCategory failure', () => {
    it('should define FETCH_CATEGORY_FAILURE', () => {
      expect(contactConstants.FETCH_CATEGORY_FAILURE).toBeDefined();
    });
    it('fetchCategory failure should make a action', () => {
      const action = contactActions.fetchCategoryFailure();
      expect(action).toEqual({
        type: contactConstants.FETCH_CATEGORY_FAILURE,
      });
    });
  });

  describe('updateSearchFilter', () => {
    it('should define UPDATE_CONTACTS_SEARCH', () => {
      expect(contactConstants.UPDATE_CONTACTS_SEARCH).toBeDefined();
    });
    it('updateSearchFilter should make a action', () => {
      const action = contactActions.updateSearchFilter();
      expect(action).toEqual({
        type: contactConstants.UPDATE_CONTACTS_SEARCH,
      });
    });
  });

  describe('switchContactsFilter', () => {
    it('should define SWITCH_CONTACTS_FILTER', () => {
      expect(contactConstants.SWITCH_CONTACTS_FILTER).toBeDefined();
    });
    it('switchContactsFilter should make a action', () => {
      const action = contactActions.switchContactsFilter();
      expect(action).toEqual({
        type: contactConstants.SWITCH_CONTACTS_FILTER,
      });
    });
  });
});
