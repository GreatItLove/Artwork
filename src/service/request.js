import axios from 'axios';
import jwt from '../store/jwtStorage';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: 'https://api2.managedartwork.com/v2/'
});

/**
 * @description Request Wrapper with default success/error actions
 * @param {Object} options app call settings
 * @return {Promise}
 */
const request = function (options) {
  const onSuccess = function (response) {
    return response;
  };

  const onError = function (error) {
    return Promise.reject(error.response || error.message);
  };

  if (jwt.exists()) {
    const { token } = jwt.getJWT();
    client.defaults.headers.common['authorization'] = token;
  }

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
