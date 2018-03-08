import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import ContactGriddle from '../components/table/ContactGriddle';

const mapDispatchToProps = dispatch => ({
  appDispatch: dispatch,
});

const mapStateToProps = (state, ownProps) => ({
  list: state.contact.list,
  fetching: state.contact.fetching,
  category: state.contact.category,
  specialInterest: state.contact.specialInterest,
  howFound: state.contact.howFound,
  customerTypes: state.contact.customerTypes,
  pagination: state.contact.pagination,
  searchFilter: state.contact.searchFilter,
  showingFilter: state.contact.showingFilter,
  selectedCheckBox: state.contact.selectedCheckBox,
});

const enhance = compose(
  translate(['contacts']),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(ContactGriddle);
