import React from 'react';
import { ListItem } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MARKETING_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired,
  styleChild: PropTypes.object.isRequired
};

/**
 * @function MarketingItem
 * @param {Object} style
 * @param {Object} styleChild
 * @returns {XML}
 */
function MarketingItem({ style, styleChild }) {
  return (
    <ListItem
      key={MARKETING_PATH}
      primaryText="Marketing"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">public</i>}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key="BulkEmail"
          innerDivStyle={styleChild}
          primaryText="Bulk Email"
          containerElement={<NavLink to={MARKETING_PATH} exact />}
        />,
        <ListItem key="SearchEngineOptimization" innerDivStyle={styleChild} primaryText="Search Engine Optimization" />,
        <ListItem key="WebsiteVisitors" innerDivStyle={styleChild} primaryText="Website Visitors" />
      ]}
    />
  );
}

MarketingItem.propTypes = propTypes;

export default MarketingItem;
