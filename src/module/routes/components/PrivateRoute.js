import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LOGIN_PATH } from '../../../config/routesPatch';
import SessionHOC from '../SessionHOC';

const propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired
};

/**
 * @function PrivateRoute
 * @param {Function} Component
 * @param {Boolean} isLogged
 * @param {Object} rest
 * @returns {XML}
 */
function PrivateRoute({ component: Component, isLogged, ...rest }) {
  return <Route {...rest} render={props => (isLogged ? <Component {...props} /> : <Redirect to={LOGIN_PATH} />)} />;
}

PrivateRoute.propTypes = propTypes;

export { PrivateRoute as PrivateRouteTest };

export default SessionHOC(PrivateRoute);
