import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import EditUser from '../../containers/EditUser';

const propTypes = {
  userId: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  closeEditDialog: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
};

function EditUserDialog({ userId, closeEditDialog, editing }) {
  const customContentStyle = {
    width: '57%',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    maxWidth: 'none',
  };
  return (
    <Dialog
      onRequestClose={closeEditDialog}
      open={editing}
      contentStyle={customContentStyle}
      bodyStyle={{ overflowY: 'unset' }}
      overlayStyle={{ backgroundColor: '#797979', opacity: '0.8' }}
      paperProps={{ style: { backgroundColor: 'none' }, zDepth: 0 }}>
      {editing && <EditUser userId={userId} closeDialog={closeEditDialog} />}
    </Dialog>
  );
}

EditUserDialog.propTypes = propTypes;

export default EditUserDialog;
