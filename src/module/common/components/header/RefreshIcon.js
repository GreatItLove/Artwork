import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';

const propTypes = {
  refresh: PropTypes.func.isRequired,
};

/**
 * @function RefreshIcon
 * @returns {XML}
 */
function RefreshIcon({ refresh }) {
  return (
    <FloatingActionButton
      mini
      backgroundColor='#ffffff'
      onClick={refresh}
      className="panel-refresh"
      children={
        <FontIcon style={{ color: '#1e6291' }} className="material-icons">
          refresh
        </FontIcon>
      }
    />
  );
}

RefreshIcon.propTypes = propTypes;

export default RefreshIcon;
