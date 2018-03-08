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
const uploadFile = function (url, payload) {
  const { file, field, ...rest } = payload
  const onSuccess = function (response) {
    return response;
  };

  const onError = function (error) {
    return Promise.reject(error.response || error.message);
  };

  const formData = new FormData();
  formData.append(field + "Doc", file);

  for (var key in rest) {
    formData.append(key, rest[key])
  }
  const config = {
    headers: {
      'authorization': jwt.getJWT().token,
      'content-type': 'multipart/form-data'
    }
  }

  return client.patch(url, formData, config).then(onSuccess).catch(onError)
};

export default uploadFile;
