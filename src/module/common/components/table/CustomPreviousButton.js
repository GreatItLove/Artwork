import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  hasPrevious: PropTypes.bool,
  onClick: PropTypes.func,
};

/**
 * @function CustomPreviousButton
 * @returns {XML}
 */
function CustomPreviousButton({ className, style, hasPrevious, onClick }) {
  const styles = {
    ...style,
    minWidth: '36px',
  }
  return (
    <RaisedButton
      className={className}
      disabled={!hasPrevious}
      onClick={onClick}
      backgroundColor="#f2f2f2"
      style={styles}
      buttonStyle={{ cursor: !hasPrevious ? 'not-allowed' : 'pointer', width: '36px' }}
      icon={
        <HardwareKeyboardArrowLeft
          color="#e18927"
          style={{ height: 40, width: 40 }}
        />}
    />
  );
}

CustomPreviousButton.propTypes = propTypes;

export default CustomPreviousButton;
