import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import auth from '../module/auth/authReducers';
import account from '../module/account/reducers/accountReducer';
import customer from '../module/account/reducers/customerReducer';
import settings from '../module/account/reducers/settingsReducer';
import sysMessage from '../module/notifications/system/sysMessageReducer';
import users from '../module/users/usersReducers';
import artists from '../module/artists/artistsReducers';
import news from '../module/news/newsReducers';
import logs from '../module/logs/logsReducer';
import contact from '../module/contacts/contactReducers';
import invoice from '../module/invoices/invoiceReducers';

const reducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  auth,
  account,
  customer,
  settings,
  sysMessage,
  users,
  artists,
  news,
  logs,
  contact,
  invoice,
});
export default reducer;
