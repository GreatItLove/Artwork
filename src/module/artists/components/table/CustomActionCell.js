import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {
  openUserDeleteDialog,
  openUserSuspendDialog,
  openUserEditDialog,
  openUserResetPasswordDialog,
} from '../../usersActions';
import RowDataHOC from '../../../common/HOCs/RowDataHOC';

const propTypes = {
  value: PropTypes.number.isRequired,
  appDispatch: PropTypes.func.isRequired,
  rowData: PropTypes.shape({
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

/**
 * @class CustomActionCell
 * @extends React.Component
 * @description Render component
 */
class CustomActionCell extends Component {
  handleOpenDeleteDialog = () => {
    const {value} = this.props;
    /**
     * @see https://github.com/GriddleGriddle/Griddle/issues/647
     */
    this.props.appDispatch(openUserDeleteDialog(value));
  };

  handleOpenSuspendDialog = () => {
    const {value} = this.props;
    this.props.appDispatch(openUserSuspendDialog(value));
  };

  handleOpenEditUserDialog = () => {
    const {value} = this.props;
    this.props.appDispatch(openUserEditDialog(value));
  };

  handleOpenResetPasswordDialog = () => {
    const {value} = this.props;
    this.props.appDispatch(openUserResetPasswordDialog(value));
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const {rowData: {active}} = this.props;

    return (
      <div className="griddle-cell-action">
        <IconMenu
          iconButtonElement={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}>
          <MenuItem
            primaryText="Edit User"
            leftIcon={<FontIcon className="material-icons">create</FontIcon>}
            onClick={this.handleOpenEditUserDialog}
          />
          <MenuItem
            primaryText={active ? 'Suspend' : 'Restore'}
            leftIcon={
              <FontIcon className="material-icons">not_interested</FontIcon>
            }
            onClick={this.handleOpenSuspendDialog}
          />
          <MenuItem
            primaryText="Reset password"
            leftIcon={<FontIcon className="material-icons">lock</FontIcon>}
            onClick={this.handleOpenResetPasswordDialog}
          />
          <MenuItem
            primaryText="Delete"
            leftIcon={<FontIcon className="material-icons">delete</FontIcon>}
            onClick={this.handleOpenDeleteDialog}
          />
        </IconMenu>
      </div>
    );
  }
}

CustomActionCell.propTypes = propTypes;

export {CustomActionCell as CustomActionCellTest};

export default RowDataHOC(CustomActionCell);
