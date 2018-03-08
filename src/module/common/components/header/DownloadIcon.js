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
  openDownloadDialog: PropTypes.func,
};

/**
 * @function DownloadIcon
 * @returns {XML}
 */
function DownloadIcon({ muiTheme, openDownloadDialog }) {
  return (
    <FloatingActionButton
      mini
      backgroundColor={muiTheme.palette.colorBrandOrange}
      style={{ boxShadow: 'none', marginRight: 8 }}
      onClick={openDownloadDialog}
      children={<FontIcon className="material-icons">file_download</FontIcon>}
    />
  );
}

DownloadIcon.propTypes = propTypes;

export { DownloadIcon as DownloadIconTest };

export default muiThemeable()(DownloadIcon);
