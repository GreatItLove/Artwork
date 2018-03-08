import React from 'react';
import { ListItem } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ARTISTS_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired
};

/**
 * @function ArtistsItem
 * @param {Object} style
 * @returns {XML}
 */
function ArtistsItem({ style }) {
  return (
    <ListItem
      key={ARTISTS_PATH}
      primaryText="Artists"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">group</i>}
      containerElement={<NavLink to={ARTISTS_PATH} exact />}
    />
  );
}

ArtistsItem.propTypes = propTypes;

export default ArtistsItem;
