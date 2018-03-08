import React from 'react';
import { ListItem } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { INVOICES_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired
};

/**
 * @function InvoicesItem
 * @param {Object} style
 * @returns {XML}
 */
function InvoicesItem({ style }) {
  return (
    <ListItem
      key={INVOICES_PATH}
      primaryText="Invoices"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">payment</i>}
      containerElement={<NavLink to={INVOICES_PATH} exact />}
    />
  );
}

InvoicesItem.propTypes = propTypes;

export default InvoicesItem;
