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
  }).isRequired,
  openAddDialog: PropTypes.func
};

/**
 * @function AddIcon
 * @param {Object} muiTheme material ui theme object
 * @param {Function} openAddDialog
 * @returns {XML}
 */
function AddIcon({ muiTheme, openAddDialog }) {
  return (
    <FloatingActionButton
      mini
      backgroundColor={muiTheme.palette.colorBrandOrange}
      style={{ boxShadow: 'none' }}
      children={<FontIcon className="material-icons">add</FontIcon>}
      onClick={openAddDialog}
    />
  );
}

AddIcon.propTypes = propTypes;

export { AddIcon as AddIconTest };

export default muiThemeable()(AddIcon);
