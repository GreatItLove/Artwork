import qs from 'qs';
import request from '../../service/request';

const login = data => {
  const { username, password } = data;
  return request({
    url: 'user/login',
    method: 'post',
    data: qs.stringify({ username, password })
  })
    .then(({ data }) => ({ response: data.response }))
    .catch(data => ({ error: data }));
};

const forgotPassword = data => {
  const { email } = data;
  return request({
    url: 'user/forgot',
    method: 'post',
    data: qs.stringify({ email })
  })
    .then(response => ({ response: response.data }))
    .catch(data => ({ error: data }));
};

const resetPassword = data => {
  return request({
    url: 'user/reset',
    method: 'post',
    data: qs.stringify(data)
  })
    .then(response => ({ response: response.data }))
    .catch(data => ({ error: data }));
};

export { login, forgotPassword, resetPassword };
