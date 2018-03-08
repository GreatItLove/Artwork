import { takeLatest } from 'redux-saga/effects';
import { FETCH_CONTACT_REQUEST, ADD_CONTACT_REQUEST } from '../../contactConstants';
import fetchContact from '../fetchContact';
import addContact from '../addContact';
import contactSaga, { closeSetActiveDialog } from '../contactSagas';

describe(' Contact Sagas', () => {
  const generator = contactSaga();
  it('Should call fetchContact', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(FETCH_CONTACT_REQUEST, fetchContact));
  });
  it('Should call addContact', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(ADD_CONTACT_REQUEST, addContact));
  });
});
