import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';

const propTypes = {
  closeDialog: PropTypes.func.isRequired,
};

function CloseIcon({ closeDialog }) {
  return (
    <FontIcon
      className="material-icons"
      onClick={closeDialog}
      style={{ 'fontSize': 36, 'color': '#66a4c0', 'cursor': 'pointer' }}>
      close
    </FontIcon>
  );
}

CloseIcon.propTypes = propTypes;

export default CloseIcon;
