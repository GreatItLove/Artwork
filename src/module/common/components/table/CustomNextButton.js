import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  hasNext: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * @function CustomNextButton
 * @param {String} className
 * @param {Object} style
 * @param {Boolean} hasNext
 * @param {Function} onClick
 * @returns {XML}
 */
function CustomNextButton({ className, style, hasNext, onClick }) {
  const styles = {
    ...style,
    minWidth: '36px',
  }
  return (
    <RaisedButton
      className={className}
      disabled={!hasNext}
      onClick={onClick}
      backgroundColor="#f2f2f2"
      style={styles}
      buttonStyle={{ cursor: !hasNext ? 'not-allowed' : 'pointer', width: '36px' }}
      icon={
        <HardwareKeyboardArrowRight
          color="#e18927"
          style={{ height: 40, width: 40 }}
        />}
    />
  );
}

CustomNextButton.propTypes = propTypes;

export default CustomNextButton;
