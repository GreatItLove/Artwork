import { call, put } from 'redux-saga/effects';

import jwt from '../../../../store/jwtStorage';
import { removeCustomer } from '../../../account/actions/customerActions';
import { removeSettings } from '../../../account/actions/settingsActions';
import logout from '../logoutSaga';

describe('Logout', () => {
  const generator = logout();

  it('Should call jwt remove ', () => {
    const next = generator.next();
    expect(next.value).toEqual(call(jwt.removeJWT));
  });

  it('Should emit action remove customer', () => {
    const next = generator.next();
    expect(next.value).toEqual(put(removeCustomer()));
  });

  it('Should emit action remove settings', () => {
    const next = generator.next();
    expect(next.value).toEqual(put(removeSettings()));
  });
});
