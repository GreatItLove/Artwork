import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';

import { forgotPasswordRequest as forgotPasswordAction } from '../authActions';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import AuthLayout from '../HOCs/AuthLayout';

export const mapDispachToProps = dispatch => ({
  forgotPassword: data => {
    dispatch(forgotPasswordAction(data));
  }
});

const enhance = compose(
  translate(['auth', 'validation']),
  AuthLayout,
  reduxForm({
    form: 'forgotPassword',
    validate: (values, { t }) => {
      const errors = {};
      if (!values.email) errors.email = t('validation:required');
      return errors;
    }
  }),
  connect(null, mapDispachToProps)
);

export default enhance(ForgotPasswordForm);
