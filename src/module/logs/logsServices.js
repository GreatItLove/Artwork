import qs from 'qs';

import request from '../../service/request';

const fetchLogs = limit => {
  return request({
    url: 'activity',
    method: 'post',
    data: qs.stringify({ limit })
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export { fetchLogs };
