import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import ContactForm from '../components/form/ContactForm';
import { addContactRequest, fetchLookupRequest } from '../contactActions';
import addContactFormValidation from '../validation/AddContactFormValidation';

const mapDispatchToProps = dispatch => ({
  submitForm: data => {
    dispatch(addContactRequest(data));
  },
  fetchLookup: data => {
    dispatch(fetchLookupRequest(data));
  },
});

const mapStateToProps = (state, ownProps) => ({
  customerTypes: state.contact.customerTypes,
});

const enhance = compose(
  translate(['validation']),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'addContact',
    validate: (values, { t }) => addContactFormValidation(values, t),
  }),
);

export default enhance(ContactForm);
