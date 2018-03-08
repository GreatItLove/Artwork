import { connect } from 'react-redux';

import HeaderRightActionIcons from '../../common/components/header/HeaderRightActionIcons';
import { invoiceDownloadPathRequest, openInvoiceDownloadDialog } from '../invoiceActions';

const mapDispatchToProps = dispatch => ({
  openDownloadDialog: () => {
    dispatch(invoiceDownloadPathRequest());
    dispatch(openInvoiceDownloadDialog());
  },
});

export default connect(null, mapDispatchToProps)(HeaderRightActionIcons);
