import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';
import muiThemeable from 'material-ui/styles/muiThemeable';

import FileDownloadDialog from '../../common/components/dialogs/FileDownloadDialog';
import { closeInvoiceDownloadDialog } from '../invoiceActions';

const mapDispatchToProps = dispatch => ({
  closeDownloadDialog: () => {
    dispatch(closeInvoiceDownloadDialog());
  },
});

const mapStateToProps = (state, ownProps) => ({
  fetching: state.invoice.fetchingDownloadpath,
  downloading: state.invoice.downloading,
  downloadPath: state.invoice.downloadPath,
});

const enhance = compose(
  muiThemeable(),
  translate(['invoices']),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(FileDownloadDialog);
