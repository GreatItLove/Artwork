import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import InputField from '../../common/components/form/InputField';
import SubmitButton from '../containers/SubmitButton';
import { LOGIN_PATH } from '../../../config/routesPatch';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

/**
 * @class ResetPasswordForm
 * @extends React.Component
 * @description Render component
 */
class ResetPasswordForm extends Component {
  handleSubmitForm = data => {
    const { newPassword, uuid } = data;
    this.props.resetPassword({ password: newPassword, uuid });
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { handleSubmit, t } = this.props;
    return (
      <div className="auth-login-wrapper">
        <div className="auth-login-fields">
          <div className="py-2" />
          <h4>{t('passwordReset.formHeader')}</h4>
          <div className="py-3" />
          <form onSubmit={handleSubmit(this.handleSubmitForm)}>
            <span>{t('passwordReset.headerInfo')}</span>
            <Field
              id="new_password"
              name="newPassword"
              component={InputField}
              floatingLabelText={t('passwordReset.newPassword.field')}
              type="password"
            />
            <Field
              id="confirm_password"
              name="confirmPassword"
              component={InputField}
              floatingLabelText={t('passwordReset.confirmPassword.field')}
              type="password"
            />
            <div className="py-2" />
            <div className="pt20">
              <SubmitButton label={t('passwordReset.submitBtn')} />
            </div>
            <div className="pt20 links">
              <Link to={LOGIN_PATH}>{t('passwordForget.backToLogin')}</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ResetPasswordForm.propTypes = propTypes;

export default ResetPasswordForm;
