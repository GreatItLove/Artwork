import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import InvoiceGriddle from '../components/table/InvoiceGriddle';

const mapDispatchToProps = dispatch => ({
  appDispatch: dispatch,
});

const mapStateToProps = (state, ownProps) => ({
  list: state.invoice.list,
  fetching: state.invoice.fetching,
  pagination: state.invoice.pagination,
  searchFilter: state.invoice.searchFilter,
  showingFilter: state.invoice.showingFilter,
  selectedCheckBox: state.invoice.selectedCheckBox,
});

const enhance = compose(
  translate(['invoices']),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(InvoiceGriddle);
