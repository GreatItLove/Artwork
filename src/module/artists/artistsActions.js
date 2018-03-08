import {
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
  CHECK_ARTISTS,
  UNCHECK_ARTISTS,
  UPDATE_SEARCH_FILTER,
  ADD_ARTIST_REQUEST,
  ADD_ARTIST_SUCCESS,
  ADD_ARTIST_FAILURE,
  OPEN_ARTIST_ADD_DIALOG,
  CLOSE_ARTIST_ADD_DIALOG,
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE,
  SWITCH_ARTIST_FILTER,
  BULK_ARTIST_EDIT_REQUEST,
  BULK_ARTIST_EDIT_SUCCESS,
  BULK_ARTIST_EDIT_FAILURE,
  GET_ARTIST_INFO_REQUEST,
  GET_ARTIST_INFO_SUCCESS,
  GET_ARTIST_INFO_FAILURE,
  PATCH_ARTIST_REQUEST,
  PATCH_ARTIST_SUCCESS,
  PATCH_ARTIST_FAILURE,
  DELETE_ARTIST,
  EDITOR_STATE_CHANGE,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  ARTIST_DOWNLOAD_PATH_REQUEST,
  ARTIST_DOWNLOAD_PATH_SUCCESS,
  ARTIST_DOWNLOAD_PATH_FAILURE,
  OPEN_ARTIST_DOWNLOAD_DIALOG,
  CLOSE_ARTIST_DOWNLOAD_DIALOG,
} from './artistsConstants';

const fetchArtistsRequest = data => ({
  type: FETCH_ARTISTS_REQUEST,
  payload: data,
});

const fetchArtistsSuccess = (data, page) => ({
  type: FETCH_ARTISTS_SUCCESS,
  payload: data,
  page: page
});

const fetchArtistsFailure = () => ({
  type: FETCH_ARTISTS_FAILURE,
});

const checkArtists = data => ({
  type: CHECK_ARTISTS,
  payload: data
})

const uncheckArtists = data => ({
  type: UNCHECK_ARTISTS,
  payload: data
})

const updateSearchFilter = data => ({
  type: UPDATE_SEARCH_FILTER,
  payload: data
})

const addArtistRequest = (data, limit) => ({
  type: ADD_ARTIST_REQUEST,
  payload: data
});

const addArtistSuccess = data => ({
  type: ADD_ARTIST_SUCCESS,
  payload: data,
});

const addArtistFailure = () => ({
  type: ADD_ARTIST_FAILURE,
});

const openArtistAddDialog = () => ({
  type: OPEN_ARTIST_ADD_DIALOG,
});

const closeArtistAddDialog = () => ({
  type: CLOSE_ARTIST_ADD_DIALOG,
});

const fetchGenresRequest = () => ({
  type: FETCH_GENRES_REQUEST
});

const fetchGenresSuccess = (data, page) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: data
});

const fetchGenresFailure = () => ({
  type: FETCH_GENRES_FAILURE,
});

const switchArtistFilter = () => ({
  type: SWITCH_ARTIST_FILTER
});

const bulkArtistEditRequest = (data) => ({
  type: BULK_ARTIST_EDIT_REQUEST,
  payload: data
})

const bulkArtistEditSuccess = () => ({
  type: BULK_ARTIST_EDIT_SUCCESS
})

const bulkArtistEditFailure = () => ({
  type: BULK_ARTIST_EDIT_FAILURE
})

const getArtistInfoRequest = (data) => ({
  type: GET_ARTIST_INFO_REQUEST,
  payload: data
})

const getArtistInfoSuccess = (data) => ({
  type: GET_ARTIST_INFO_SUCCESS,
  payload: data
})

const getArtistInfoFailure = () => ({
  type: GET_ARTIST_INFO_FAILURE
})

const patchArtistRequest = (data, id) => ({
  type: PATCH_ARTIST_REQUEST,
  payload: data,
  id: id
})

const patchArtistSuccess = (data) => ({
  type: PATCH_ARTIST_SUCCESS,
  payload: data
})

const patchArtistFailure = () => ({
  type: PATCH_ARTIST_FAILURE
})

const deleteArtist = id => ({
  type: DELETE_ARTIST,
  id: id
})

const editorStateChange = (field, state) => ({
  type: EDITOR_STATE_CHANGE,
  field: field,
  state: state,
})

const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST
});

const fetchCategoriesSuccess = (data, page) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: data
});

const fetchCategoriesFailure = () => ({
  type: FETCH_CATEGORIES_FAILURE,
});

const artistDownloadPathRequest = () => ({
  type: ARTIST_DOWNLOAD_PATH_REQUEST,
});

const artistDownloadPathSuccess = data => ({
  type: ARTIST_DOWNLOAD_PATH_SUCCESS,
  payload: data
});

const artistDownloadPathFailure = () => ({
  type: ARTIST_DOWNLOAD_PATH_FAILURE,
});

const openArtistDownloadDialog = () => ({
  type: OPEN_ARTIST_DOWNLOAD_DIALOG,
});

const closeArtistDownloadDialog = () => ({
  type: CLOSE_ARTIST_DOWNLOAD_DIALOG,
});

export {
  fetchArtistsRequest,
  fetchArtistsSuccess,
  fetchArtistsFailure,
  checkArtists,
  uncheckArtists,
  updateSearchFilter,
  addArtistRequest,
  addArtistSuccess,
  addArtistFailure,
  openArtistAddDialog,
  closeArtistAddDialog,
  fetchGenresRequest,
  fetchGenresSuccess,
  fetchGenresFailure,
  switchArtistFilter,
  bulkArtistEditRequest,
  bulkArtistEditSuccess,
  bulkArtistEditFailure,
  getArtistInfoSuccess,
  getArtistInfoFailure,
  getArtistInfoRequest,
  patchArtistRequest,
  patchArtistSuccess,
  patchArtistFailure,
  deleteArtist,
  editorStateChange,
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  artistDownloadPathRequest,
  artistDownloadPathSuccess,
  artistDownloadPathFailure,
  openArtistDownloadDialog,
  closeArtistDownloadDialog,
};
