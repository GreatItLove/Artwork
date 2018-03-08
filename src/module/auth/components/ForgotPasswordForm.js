import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputField from '../../common/components/form/InputField';
import SubmitButton from '../containers/SubmitButton';
import { LOGIN_PATH } from '../../../config/routesPatch';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  forgotPassword: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

class ForgotPasswordForm extends Component {
  handleFormSubmit = data => {
    this.props.forgotPassword(data);
  };

  render() {
    const { handleSubmit, t } = this.props;
    return (
      <div className="auth-login-wrapper">
        <div className="auth-login-fields">
          <div className="py-2" />
          <h4>{t('passwordForget.formHeader')}</h4>
          <div className="py-3" />
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <span>{t('passwordForget.headerInfo')}</span>
            <Field
              id="email"
              name="email"
              component={InputField}
              floatingLabelText={t('passwordForget.email.field')}
              type="email"
            />
            <div className="py-2" />
            <div className="pt20">
              <SubmitButton label={t('passwordForget.submitBtn')} />
            </div>
            <div className="py-2" />
            <div className="pt20 links">
              <Link to={LOGIN_PATH}>{t('passwordForget.backToLogin')}</Link>
            </div>
          </form>
          <div className="py-2" />
        </div>
      </div>
    );
  }
}

ForgotPasswordForm.propTypes = propTypes;

export default ForgotPasswordForm;
