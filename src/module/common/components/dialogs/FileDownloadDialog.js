import React from 'react';
import { Dialog, RefreshIndicator, RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';

import Panel from '../Panel';
import CloseIcon from '../header/CloseIcon';

const propTypes = {
  downloading: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  closeDownloadDialog: PropTypes.func.isRequired,
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      colorBrandOrange: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function FileDownloadDialog({
  t,
  downloading,
  closeDownloadDialog,
  fetching,
  muiTheme,
  downloadPath,
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
  const refreshIndicatorStyle = { position: 'absolute', top: '60%', left: '45%' };
  return (
    <Dialog
      onRequestClose={closeDownloadDialog}
      open={downloading}
      bodyStyle={{ overflowY: 'unset' }}
      contentStyle={customContentStyle}
      overlayStyle={{ backgroundColor: '#797979', opacity: '0.8' }}
      paperProps={{ style: { backgroundColor: 'none' }, zDepth: 0 }}>
      <Panel
        title={t('download.title')}
        panelHeadingClassName="users-from-panel-heading"
        rightElement={<CloseIcon closeDialog={closeDownloadDialog} />}>
        {fetching ? (
          <div style={refreshIndicatorStyle}>
            <RefreshIndicator left={0} top={0} status="loading" />
          </div>
        ) : (
            <div className="text-center">
              <div className="pb-2">
                We’ve saved a copy in the Files section so you can download at any time. Click the button below to download now.
              </div>
              <div className="pb-2">
                <RaisedButton
                  label="Download"
                  backgroundColor={muiTheme.palette.colorBrandOrange}
                  labelColor="#ffffff"
                  primary={false}
                  href={downloadPath}
                  style={{ boxShadow: 'none' }}
                  onClick={closeDownloadDialog}
                />
              </div>
            </div>
          )}
      </Panel>
    </Dialog>
  );
}

FileDownloadDialog.propTypes = propTypes;

export default FileDownloadDialog;
