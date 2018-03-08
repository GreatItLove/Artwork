import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import ResetPasswordForm from '../components/ResetPasswordForm';
import AuthLayout from '../HOCs/AuthLayout';
import { resetPasswordRequest } from '../authActions';

const mapStateToProps = (state, ownProps) => ({
  initialValues: { uuid: ownProps.match.params.uuid }
});

const mapDispatchToProps = dispatch => ({
  resetPassword: data => {
    dispatch(resetPasswordRequest(data));
  }
});

const enhance = compose(
  translate(['auth', 'validation']),
  AuthLayout,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'resetPassword',
    validate: (values, { t }) => {
      const errors = {};
      if (!values.newPassword) errors.newPassword = t('validation:required');
      if (!values.confirmPassword) errors.confirmPassword = t('validation:required');
      if (values.newPassword && values.confirmPassword && values.confirmPassword !== values.newPassword)
        errors.confirmPassword = t('validation:notMatch', {
          field1: 'New Password',
          field2: 'confirm password'
        });
      return errors;
    }
  })
);

export default enhance(ResetPasswordForm);
