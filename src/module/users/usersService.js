import request from '../../service/request';
import qs from 'qs';

export const fetchUsers = data => {
  return request({
    url: 'users/list',
    method: 'post',
    data: qs.stringify(data)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const deleteUser = userId => {
  return request({
    url: `users/${userId}`,
    method: 'delete'
  })
    .then(response => ({ response: response.data }))
    .catch(({ data }) => ({ error: data }));
};

export const addUser = data => {
  return request({
    url: 'users',
    method: 'post',
    data: qs.stringify(data)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const updateUser = data => {
  const { userId, ...updateData } = data;
  return request({
    url: `users/${userId}`,
    method: 'patch',
    data: qs.stringify(updateData)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const usersDownloadPath = data => {
  return request({
    url: 'users/download',
    method: 'post',
    data: qs.stringify(data)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};
