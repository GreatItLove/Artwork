import updateObject from '../updateObject';
import initialState from '../../store/initialState';

const usersInit = initialState.users;

describe('Update Object', () => {
  it('Should update object', () => {
    const newValue = { fetching: true };
    const newObject = { ...usersInit, ...newValue };
    expect(updateObject(usersInit, newValue)).toEqual(newObject);
  });
});
