import React from 'react';
import { ListItem } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CONSIGNMENTS_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired,
  styleChild: PropTypes.object.isRequired
};

/**
 * @function ConsignmentsItem
 * @param {Object} style
 * @param {Object} styleChild
 * @returns {XML}
 */
function ConsignmentsItem({ style, styleChild }) {
  return (
    <ListItem
      key={CONSIGNMENTS_PATH}
      primaryText="Consignments"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">local_shipping</i>}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key="Overview"
          primaryText="Overview (View All)"
          innerDivStyle={styleChild}
          containerElement={<NavLink to={CONSIGNMENTS_PATH} exact />}
        />,
        <ListItem key="ConsignedOut" innerDivStyle={styleChild} primaryText="Consigned Out" />
      ]}
    />
  );
}

ConsignmentsItem.propTypes = propTypes;

export default ConsignmentsItem;
