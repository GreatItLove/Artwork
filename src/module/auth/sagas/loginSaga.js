import { call, put } from 'redux-saga/effects';

import jwt from '../../../store/jwtStorage';
import selection from '../../../store/selectionStorage';
import { login as loginService } from '../authServices';
import { loginSuccess, loginFailure } from '../authActions';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../config/general';
import serverMessageHandler from '../../../i18n/serverMessageHandler';

function* logIn(action) {
  const { startPage, ...loginData } = action.payload;
  const { response, error } = yield call(loginService, loginData);

  if (response) {
    const { data: { user } } = response;
    yield call(jwt.setJWT, user);
    yield call(selection.setSelection, startPage);
    const { token } = user;
    yield put(loginSuccess({ startPage, token }));
  } else if (error) {
    const { data } = error;
    yield put(addSysMessage(serverMessageHandler(data), SYS_MESSAGE_TYPE_ERROR));
    yield put(loginFailure());
  } else {
    yield put(addSysMessage('Server connection interrupted', SYS_MESSAGE_TYPE_ERROR));
    yield put(loginFailure());
  }
}

export default logIn;
