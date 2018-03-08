import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import analyticsMiddleware from './module/analytics/middleware';

import './static/css/App.css';
import './static/css/vendor-styles.css';
import muiTheme from './muiTheme';
import initialState from './store/initialState';
import rootReducer from './reducer';
import rootSaga from './saga';
import PrivateRoute from './module/routes/components/PrivateRoute';
import PublicRoute from './module/routes/components/PublicRoute';
import Admin from './module/admin/containers/Admin';
import Login from './module/auth/containers/Login';
import ForgotPassword from './module/auth/containers/ForgotPassword';
import ResetPassword from './module/auth/containers/ResetPassword';
import { LOGIN_PATH, FORGOT_PASSWORD_PATH, ADMIN_PANEL_BASE_PATH, RESET_PASSWORD_PATH } from './config/routesPatch';

import i18next from './i18n/';
import { I18nextProvider } from 'react-i18next';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history), analyticsMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <I18nextProvider i18n={i18next}>
          <div>
            <Switch>
              <PublicRoute exact path={FORGOT_PASSWORD_PATH} component={ForgotPassword} />
              <PublicRoute exact path={`${RESET_PASSWORD_PATH}/:uuid`} component={ResetPassword} />
              <PublicRoute exact path={LOGIN_PATH} component={Login} />
              <PrivateRoute path={ADMIN_PANEL_BASE_PATH} component={Admin} />
              <Route component={() => <div>Not found</div>} />
            </Switch>
          </div>
        </I18nextProvider>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
