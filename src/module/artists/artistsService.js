import request from '../../service/request';
import uploadFile from '../../service/uploadFile';
import qs from 'qs';

const fetchArtists = data => {
  return request({
    url: 'artists/list',
    method: 'post',
    data: qs.stringify(data),
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

const addArtist = data => {
  return request({
    url: 'artists',
    method: 'post',
    data: qs.stringify(data),
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

const fetchGenres = () => {
  return request({
    url: 'lookups/genre',
    method: 'get',
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

const fetchCategories = () => {
  return request({
    url: 'lookups/category',
    method: 'get',
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

const bulkArtistEditRequest = data => {
  return request({
    url: 'artists/bulkupdate',
    method: 'post',
    data: qs.stringify(data)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
}

const getArtistInfoRequest = data => {
  return request({
    url: `artists/${data}`,
    method: 'get',
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

const patchArtist = ({ payload, id }) => {
  return request({
    url: `artists/${id}`,
    method: 'patch',
    data: qs.stringify(payload)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
}

const deleteArtist = ({ id }) => {
  return request({
    url: `artists/${id}`,
    method: 'delete',
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
}

const uploadFileArtist = ({ payload, id }) => {
  return uploadFile(`artists/${id}`, payload)
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }))

}

const artistDownloadPath = data => {
  return request({
    url: 'artists/download',
    method: 'post',
    data: qs.stringify(data)
  })
    .then(response => response.data)
    .catch(({ data }) => ({ error: data }));
};

export {
  fetchArtists,
  addArtist,
  fetchGenres,
  bulkArtistEditRequest,
  getArtistInfoRequest,
  patchArtist,
  deleteArtist,
  uploadFileArtist,
  fetchCategories,
  artistDownloadPath,
};
