import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import SessionHOC from '../SessionHOC';
import { ADMIN_PANEL_BASE_PATH } from '../../../config/routesPatch';

const propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  startPage: PropTypes.string
};

const defaultTypes = {
  startPage: ADMIN_PANEL_BASE_PATH
};

/**
 * @function PublicRoute
 * @param {Function} Component
 * @param {Boolean} isLogged
 * @param {String} startPage
 * @param {Object} rest
 * @returns {XML}
 */
function PublicRoute({ component: Component, isLogged, startPage, ...rest }) {
  const redirect = startPage || ADMIN_PANEL_BASE_PATH;
  return <Route {...rest} render={props => (isLogged ? <Redirect to={redirect} /> : <Component {...rest} />)} />;
}

PublicRoute.propTypes = propTypes;
PublicRoute.defaultProps = defaultTypes;

export { PublicRoute as PublicRouteTest };

export default SessionHOC(PublicRoute);
