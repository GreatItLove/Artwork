import React from 'react';
import Avatar from 'material-ui/Avatar';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import muiThemeable from 'material-ui/styles/muiThemeable';

/**
 * @function IconAdd
 * @returns {XML}
 */
function IconAdd({ muiTheme }) {
  return (
    <Avatar
      backgroundColor={muiTheme.palette.colorBrandGrey}
      color={muiTheme.palette.colorBrandBlue}
      icon={<ContentAddCircleOutline />}
      size={35}
    />
  );
}

export { IconAdd as IconAddTest };

export default muiThemeable()(IconAdd);
