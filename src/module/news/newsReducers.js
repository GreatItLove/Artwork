import updateObject from '../../utility/updateObject';
import { NEWS_SUCCESS, NEWS_REQUEST, NEWS_FAILURE } from './newsConstants';

function news(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case NEWS_REQUEST:
      return updateObject(state, {
        newsData: null,
        newsLoading: true,
        newsError: ''
      });
    case NEWS_SUCCESS:
      return updateObject(state, {
        newsData: payload[0],
        newsLoading: false,
        newsError: ''
      });
    case NEWS_FAILURE:
      return updateObject(state, {
        newsData: null,
        newsLoading: false,
        newsError: payload
      });
    default:
      return state;
  }
}

export default news;
