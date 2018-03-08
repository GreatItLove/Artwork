import { createSelector } from 'reselect';
import createCachedSelector from 're-reselect';

export const getUsers = state => state.users.list;
export const getChangingActive = state => state.users.changingActive;
export const getAdding = state => state.users.adding;
export const getEditing = state => state.users.editing;
export const getResettingPassword = state => state.users.resettingPassword;
export const getPagination = state => state.users.pagination;
export const getSearchFilter = state => state.users.searchFilter;

export const getUserForChangingActive = createSelector([getUsers, getChangingActive], (users, userId) => {
  if (userId === false || !users) {
    return false;
  }
  return users.find(user => user.userId === userId);
});

export const getUserById = createCachedSelector(
  getUsers,
  (state, userId) => userId,
  (users, userId) => {
    const id = parseInt(userId, 10);
    return users.find(user => user.userId === id);
  }
)((state, userId) => userId);
