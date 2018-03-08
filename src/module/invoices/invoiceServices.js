import qs from 'qs';

import request from '../../service/request';

export const fetchInvoice = data => {
  return request({
    url: 'invoices/list',
    method: 'post',
    data: qs.stringify(data),
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const bulkInvoiceEditRequest = data => {
  return request({
    url: 'invoices/bulkupdate',
    method: 'post',
    data: qs.stringify(data),
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export const invoiceDownloadPath = data => {
  return request({
    url: 'invoices/download',
    method: 'post',
    data: qs.stringify(data)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};
