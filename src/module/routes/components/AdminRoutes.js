import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../resources/dashboard/Dashboard';
import EditAccount from '../../account/containers/EditAccount';
import UsersTable from '../../users/components/table/UsersTable';
import ResetPassword from '../../users/containers/ResetPassword';
import ArtistEdit from '../../artists/ArtistEdit';
import resources from '../../resources/index';
import {
  ADMIN_PANEL_BASE_PATH,
  ACCOUNT_EDIT_PATH,
  USERS_LIST_PATH,
  USERS_RESET_PASSWORD_PATH,
  ARTISTS_EDIT_PATH
} from '../../../config/routesPatch';

/**
 * @function AdminRoutes
 * @returns {XML}
 */
function AdminRoutes() {
  return (
    <Switch>
      <Route
        key={ADMIN_PANEL_BASE_PATH}
        exact
        path={`${ADMIN_PANEL_BASE_PATH}`}
        render={routeProps => <Dashboard {...routeProps} />}
      />
      {resources.map(({ name, list: RouteComponent }) => (
        <Route key={name} exact path={name} render={routeProps => <RouteComponent resource={name} {...routeProps} />} />
      ))}

      <Route
        key={ACCOUNT_EDIT_PATH}
        exact
        path={ACCOUNT_EDIT_PATH}
        render={routeProps => <EditAccount {...routeProps} />}
      />
      <Route key={USERS_LIST_PATH} exact path={USERS_LIST_PATH} render={routeProps => <UsersTable {...routeProps} />} />
      <Route
        key={USERS_RESET_PASSWORD_PATH}
        exact
        path={`${USERS_RESET_PASSWORD_PATH}/:id`}
        render={routeProps => <ResetPassword {...routeProps} />}
      />

      {/* Edit Arists */}
      <Route
        key={ARTISTS_EDIT_PATH}
        exact
        path={`${ARTISTS_EDIT_PATH}/:id`}
        render={routeProps => <ArtistEdit {...routeProps} />}
      />
    </Switch>
  );
}

export default AdminRoutes;
