import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import AddContact from '../../containers/AddContact';

const propTypes = {
  adding: PropTypes.bool.isRequired,
  closeAddDialog: PropTypes.func.isRequired,
};

function AddContactDialog({ adding, closeAddDialog }) {
  const customContentStyle = {
    width: '56%',
    position: 'fixed',
    top: '-50px',
    bottom: '0',
    left: '0',
    right: '0',
    maxWidth: 'none',
  };
  return (
    <Dialog
      onRequestClose={closeAddDialog}
      open={adding}
      autoScrollBodyContent
      contentStyle={customContentStyle}
      bodyStyle={{ overflowY: 'unset' }}
      overlayStyle={{ backgroundColor: '#797979', opacity: '0.8' }}
      paperProps={{ style: { backgroundColor: 'none' }, zDepth: 0 }}>
      {adding && <AddContact closeDialog={closeAddDialog} />}
    </Dialog>
  );
}

AddContactDialog.propTypes = propTypes;

export default AddContactDialog;
