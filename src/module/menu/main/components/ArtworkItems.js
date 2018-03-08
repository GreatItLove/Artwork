import React from 'react';
import { ListItem } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ARTWORK_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired
};

/**
 * @function ArtworkItems
 * @param {Object} style
 * @returns {XML}
 */
function ArtworkItems({ style }) {
  return (
    <ListItem
      key={ARTWORK_PATH}
      primaryText="Artwork"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">color_lens</i>}
      containerElement={<NavLink to={ARTWORK_PATH} exact />}
    />
  );
}

ArtworkItems.propTypes = propTypes;

export default ArtworkItems;
