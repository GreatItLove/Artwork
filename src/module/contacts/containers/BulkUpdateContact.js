import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

import BulkUpdateContactForm from '../components/form/BulkUpdateContactForm';
import { closeBulkUpdateContactDialog, bulkContactEditRequest } from '../contactActions';

const mapDispatchToProps = dispatch => ({
  closeBulkUpdateDialog: () => {
    dispatch(closeBulkUpdateContactDialog());
  },
  bulkUpdate: data => {
    dispatch(bulkContactEditRequest(data));
  },
});

const mapStateToProps = (state, ownProps) => ({
  bulkUpdateDialogData: state.contact.bulkUpdateDialogData,
  howFound: state.contact.howFound,
  category: state.contact.category,
  customerTypes: state.contact.customerTypes,
  specialInterest: state.contact.specialInterest,
  selectedCheckBox: state.contact.selectedCheckBox,
});

const enhance = compose(
  translate(['contacts']),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'bulkUpdateContact',
  }),
);

export default enhance(BulkUpdateContactForm);
