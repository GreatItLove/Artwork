import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from './newsConstants';

const fetchNewsRequest = data => ({
  type: NEWS_REQUEST,
  payload: data
});

const fetchNewsSuccess = data => ({
  type: NEWS_SUCCESS,
  payload: data
});

const fetchNewsFailure = data => ({
  type: NEWS_FAILURE,
  payload: data
});

export { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure };
