import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import Panel from '../../../common/components/Panel';
import CloseIcon from '../../../common/components/header/CloseIcon';
import SubmitBtnLoader from '../../../common/components/form/SubmitBtnLoader';

const propTypes = {
  openDialog: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  closeDialog: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      colorBrandOrange: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

class SuspendUserDialog extends Component {
  handleClose = () => {
    this.props.closeDialog();
  };

  handleUpdateStatus = () => {
    const { user } = this.props;
    this.props.updateStatus(user);
  };

  render() {
    const { openDialog, user: { active }, muiTheme, loading } = this.props;
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
            <span className="users cancel-link" onClick={this.handleClose}>
              CANCEL
            </span>
          </div>
          <div className="col-md-3">
            <SubmitBtnLoader
              backgroundColor={muiTheme.palette.colorBrandOrange}
              labelColor="#ffffff"
              primary={false}
              style={{ boxShadow: 'none' }}
              label={active ? 'Suspend User' : 'Restore'}
              onClick={this.handleUpdateStatus}
              loading={loading}
            />
          </div>
        </div>
      </div>
    );
    return (
      <Dialog
        modal={false}
        open={openDialog}
        bodyStyle={{ overflowY: 'unset' }}
        contentStyle={customContentStyle}
        overlayStyle={{ backgroundColor: '#797979', opacity: '0.8' }}
        paperProps={{ style: { backgroundColor: 'none' }, zDepth: 0 }}
        onRequestClose={this.handleClose}>
        <Panel
          title={active ? 'Suspend user' : 'Restore user'}
          panelHeadingClassName="users-from-panel-heading"
          rightElement={<CloseIcon closeDialog={this.handleClose} />}
          actions={actions}>
          {active ? (
            <span>Do you really want to suspend user? The user won't be able to login to ArtworkManager.</span>
          ) : (
              <span>Do you really want to restore user?</span>
            )}
        </Panel>
      </Dialog>
    );
  }
}

SuspendUserDialog.propTypes = propTypes;

export default SuspendUserDialog;
