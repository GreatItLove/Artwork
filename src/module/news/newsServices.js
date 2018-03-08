import qs from 'qs';

import request from '../../service/request';

const fetchNews = data => {
  return request({
    url: 'news',
    method: 'post',
    data: qs.stringify(data),
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export { fetchNews };
