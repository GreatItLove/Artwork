import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import AddUser from '../../containers/AddUser';

const propTypes = {
  adding: PropTypes.bool.isRequired,
  closeAddDialog: PropTypes.func.isRequired
};

/**
 * @function AddUserDialog
 * @param {Boolean} adding
 * @param {Function} closeAddDialog
 * @returns {XML}
 */
function AddUserDialog({ adding, closeAddDialog }) {
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
      onRequestClose={closeAddDialog}
      open={adding}
      bodyStyle={{ overflowY: 'unset' }}
      contentStyle={customContentStyle}
      overlayStyle={{ backgroundColor: '#797979', opacity: '0.8' }}
      paperProps={{ style: { backgroundColor: 'none' }, zDepth: 0 }}
    >
      {adding && <AddUser closeDialog={closeAddDialog} />}
    </Dialog>
  );
}

AddUserDialog.propTypes = propTypes;

export default AddUserDialog;
