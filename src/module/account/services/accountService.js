import qs from 'qs';
import request from '../../../service/request';

const fetchAccount = () => {
  return request({
    url: 'me'
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

//TODO merge with usersService - do not repeat yourself
const updateAccount = data => {
  const { userId, ...updateData } = data;
  return request({
    url: `users/${userId}`,
    method: 'patch',
    data: qs.stringify(updateData)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

const transferStatus = userId => {
  return request({
    url: 'users/transfer',
    method: 'post',
    data: qs.stringify(userId)
  })
    .then(res => ({ response: res }))
    .catch(({ data }) => ({ error: data }));
};

export { fetchAccount, updateAccount, transferStatus };
