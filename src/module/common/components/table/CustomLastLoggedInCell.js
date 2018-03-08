import React from 'react';
import PropTypes from 'prop-types';

import convertTimestamp from '../../../../utility/convertTimestamp';

const propTypes = {
  value: PropTypes.string.isRequired
};

/**
 * @function CustomLastLoggedInCell
 * @param {Number} value
 * @returns {XML}
 */
function CustomLastLoggedInCell({ value }) {
  return <span>{value && convertTimestamp(value)}</span>;
}

CustomLastLoggedInCell.propTypes = propTypes;
export default CustomLastLoggedInCell;
