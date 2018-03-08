import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import UserForm from '../components/form/UserForm';
import { addUserRequest } from '../usersActions';
import userFormValidation from '../validation/addUserFormValidation';

const mapDispatchToProps = dispatch => ({
  submitForm: data => {
    const { confirmPassword, ...rest } = data;
    dispatch(addUserRequest(rest));
  }
});

const enhance = compose(
  translate(['account', 'validation']),
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'addUser',
    validate: (values, { t }) => userFormValidation(values, t)
  })
);

export default enhance(UserForm);
