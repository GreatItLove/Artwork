import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import ResetPassword from '../../containers/ResetPassword';

const propTypes = {
  resettingPassword: PropTypes.bool.isRequired,
  userId: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  closeResetPasswordDialog: PropTypes.func.isRequired
};

/**
 * @function ResetPasswordDialog
 * @returns {XML}
 */
function ResetPasswordDialog({ resettingPassword, userId, closeResetPasswordDialog }) {
  return (
    <Dialog
      onRequestClose={closeResetPasswordDialog}
      open={resettingPassword}
      bodyStyle={{ overflowY: 'unset' }}
      overlayStyle={{ backgroundColor: '#797979', opacity: '0.8' }}
      paperProps={{ style: { backgroundColor: 'none' }, zDepth: 0 }}
    >
      {resettingPassword && <ResetPassword userId={userId} closeDialog={closeResetPasswordDialog} />}
    </Dialog>
  );
}

ResetPasswordDialog.propTypes = propTypes;

export default ResetPasswordDialog;
