import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import BulkUpdateContact from '../../containers/BulkUpdateContact';

const propTypes = {
  updating: PropTypes.bool.isRequired,
  closeBulkUpdateDialog: PropTypes.func.isRequired,
};

function BulkUpdateContactDialog({ updating, closeBulkUpdateDialog }) {
  const customContentStyle = {
    width: '62%',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    maxWidth: 'none',
  };
  return (
    <Dialog
      onRequestClose={closeBulkUpdateDialog}
      open={updating}
      bodyStyle={{ overflowY: 'unset' }}
      contentStyle={customContentStyle}
      overlayStyle={{ backgroundColor: '#797979', opacity: '0.8' }}
      paperProps={{ style: { backgroundColor: 'none' }, zDepth: 0 }}>
      {updating && <BulkUpdateContact closeDialog={closeBulkUpdateDialog} />}
    </Dialog>
  );
}

BulkUpdateContactDialog.propTypes = propTypes;

export default BulkUpdateContactDialog;
