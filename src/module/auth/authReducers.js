import updateObject from '../../utility/updateObject';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  LOGOUT
} from './authConstants';

function auth(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return updateObject(state, { loading: true });
    case LOGIN_SUCCESS:
      return updateObject(state, {
        loading: false,
        ...payload
      });
    case LOGIN_FAILURE:
      return updateObject(state, { loading: false });
    case FORGOT_PASSWORD_SUCCESS:
    case FORGOT_PASSWORD_FAILURE:
    case RESET_PASSWORD_SUCCESS:
    case RESET_PASSWORD_FAILURE:
      return updateObject(state, { loading: false });
    case LOGOUT:
      return updateObject(state, {
        loading: false,
        startPage: state.startPage,
        token: false
      });
    default:
      return state;
  }
}

export default auth;
