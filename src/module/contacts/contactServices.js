import qs from 'qs';

import request from '../../service/request';

export const fetchContact = data => {
  return request({
    url: 'contacts/list',
    method: 'post',
    data: qs.stringify(data),
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const fetchLookup = lookUp => {
  return request({
    url: `lookups/contacts/${lookUp}`,
    method: 'get',
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const bulkContactEditRequest = data => {
  return request({
    url: 'contacts/bulkupdate',
    method: 'post',
    data: qs.stringify(data),
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const contactDownloadPath = data => {
  return request({
    url: 'contacts/download',
    method: 'post',
    data: qs.stringify(data)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const addContact = data => {
  return request({
    url: 'contacts',
    method: 'post',
    data: qs.stringify(data),
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};
