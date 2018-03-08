import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
};

/**
 * @function CustomActiveCell
 * @param {String} value
 * @returns {XML}
 */
function CustomCMSNCell({ value }) {
  const content = <span>{(value * 100).toFixed(2)} %</span>;
  return content;
}

CustomCMSNCell.propTypes = propTypes;

export default CustomCMSNCell;
