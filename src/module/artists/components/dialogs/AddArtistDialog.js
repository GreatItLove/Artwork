import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

import AddArtist from '../../containers/AddArtist';

const propTypes = {
  adding: PropTypes.bool.isRequired,
  closeAddDialog: PropTypes.func.isRequired,
};

/**
 * @function AddArtist
 * @param {Boolean} adding
 * @param {Function} closeAddDialog
 * @returns {XML}
 */
function AddArtistDialog({adding, closeAddDialog}) {
  return (
    <Dialog
      onRequestClose={closeAddDialog}
      open={adding}
      bodyStyle={{overflowY: 'unset'}}
      overlayStyle={{backgroundColor: '#797979', opacity: '0.8'}}
      paperProps={{style: {backgroundColor: 'none'}, zDepth: 0}}>
      {adding && <AddArtist closeDialog={closeAddDialog} />}
    </Dialog>
  );
}

AddArtistDialog.propTypes = propTypes;

export default AddArtistDialog;
