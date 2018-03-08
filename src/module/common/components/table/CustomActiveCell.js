import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.bool.isRequired
};

/**
 * @function CustomActiveCell
 * @param {String} value
 * @returns {XML}
 */
function CustomActiveCell({ value }) {
  const content = value ? (
    <FontIcon className="material-icons">done</FontIcon>
  ) : (
    <FontIcon className="material-icons">clear</FontIcon>
  );
  return content;
}

CustomActiveCell.propTypes = propTypes;

export default CustomActiveCell;
