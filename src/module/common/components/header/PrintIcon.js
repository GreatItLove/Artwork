import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';

const propTypes = {
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      colorBrandOrange: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

/**
 * @function PrintIcon
 * @returns {XML}
 */
function PrintIcon({ muiTheme }) {
  return (
    <FloatingActionButton
      mini
      backgroundColor={muiTheme.palette.colorBrandOrange}
      style={{ boxShadow: 'none', marginRight: 8 }}
      children={<FontIcon className="material-icons">print</FontIcon>}
    />
  );
}

PrintIcon.propTypes = propTypes;

export { PrintIcon as PrintIconTest };

export default muiThemeable()(PrintIcon);
