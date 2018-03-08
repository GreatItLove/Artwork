import { takeLatest } from 'redux-saga/effects';

import watchUsers, { closeSetActiveDialog } from '../usersSagas';
import fetchUsers from '../fetchUsers';
import deleteUser from '../deleteUser';
import addUser from '../addUser';
import updateUser from '../updateUser';
import { FETCH_USERS_REQUEST, DELETE_USER_REQUEST, ADD_USER_REQUEST, UPDATE_USER_REQUEST } from '../../usersConstants';

describe('Watch Users', () => {
  const generator = watchUsers();
  it('Should call fetchUser', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(FETCH_USERS_REQUEST, fetchUsers));
  });
  it('Should call delete user', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(DELETE_USER_REQUEST, deleteUser));
  });
  it('Should call add user', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(ADD_USER_REQUEST, addUser));
  });
  it('Should call update user', () => {
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(UPDATE_USER_REQUEST, updateUser));
  });
});
