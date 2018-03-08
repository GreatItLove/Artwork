import React from 'react';
import { Dialog } from 'material-ui';
import PropTypes from 'prop-types';

import Panel from '../../../common/components/Panel';
import CloseIcon from '../../../common/components/header/CloseIcon';
import SubmitBtnLoader from '../../../common/components/form/SubmitBtnLoader';

const propTypes = {
  openDialog: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  deleteUsers: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      colorBrandOrange: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function DeleteUserDialog({
  closeDialog,
  deleteUsers,
  userId,
  openDialog,
  muiTheme,
  ...rest
}) {
  const customContentStyle = {
    width: '57%',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    maxWidth: 'none',
  };
  const actions = (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-md-7" />
        <div className="col-md-2 my-auto">
          <span className="users cancel-link" onClick={closeDialog}>
            CANCEL
          </span>
        </div>
        <div className="col-md-3">
          <SubmitBtnLoader
            backgroundColor={muiTheme.palette.colorBrandOrange}
            labelColor="#ffffff"
            primary={false}
            style={{ boxShadow: 'none' }}
            label="Delete User"
            onClick={() => {
              deleteUsers(userId);
            }}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
  return (
    <Dialog
      open={openDialog}
      bodyStyle={{ overflowY: 'unset' }}
      contentStyle={customContentStyle}
      overlayStyle={{ backgroundColor: '#797979', opacity: '0.8' }}
      paperProps={{ style: { backgroundColor: 'none' }, zDepth: 0 }}
      onRequestClose={closeDialog}>
      <Panel
        title="Delete user"
        panelHeadingClassName="users-from-panel-heading"
        rightElement={<CloseIcon closeDialog={closeDialog} />}
        actions={actions}>
        Do you really want to delete the user?
      </Panel>
    </Dialog>
  );
}

DeleteUserDialog.propTypes = propTypes;

export default DeleteUserDialog;
