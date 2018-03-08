import React from 'react';
import { ListItem } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import { ADMIN_PANEL_BASE_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

/**
 * @function DashboardItem
 * @param {Object} style
 * @param {Function} t translate function
 * @returns {XML}
 */
function DashboardItem({ style, t }) {
  return (
    <ListItem
      key="dashboard"
      primaryText={t('menuItems.dashboard')}
      innerDivStyle={style}
      leftIcon={<i className="material-icons">dashboard</i>}
      containerElement={<NavLink to={ADMIN_PANEL_BASE_PATH} exact />}
    />
  );
}

DashboardItem.propTypes = propTypes;

export { DashboardItem as DashboardItemTest };

export default translate('app')(DashboardItem);
