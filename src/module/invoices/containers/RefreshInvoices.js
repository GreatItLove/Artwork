import { connect } from 'react-redux';

import RefreshIcon from '../../common/components/header/RefreshIcon';
import { fetchInvoiceRequest, clearCheckedInvoice, switchInvoiceFilter, updateSearchFilter } from '../invoiceActions';

const mapDispatchToProps = dispatch => ({
  refresh: () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    dispatch(fetchInvoiceRequest({ limit: 25, offset: 0, fromDate: date, toDate: new Date() }));
    dispatch(clearCheckedInvoice());
    dispatch(switchInvoiceFilter(false));
    dispatch(updateSearchFilter({}));
  },
});

export default connect(null, mapDispatchToProps)(RefreshIcon);
