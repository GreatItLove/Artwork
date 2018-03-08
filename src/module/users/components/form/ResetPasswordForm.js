import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import Panel from '../../../common/components/Panel';
import SystemMessage from '../../../notifications/system/components/SystemMessage';
import PasswordField from '../../../common/components/form/PasswordField';
import ConfirmPasswordField from '../../../common/components/form/ConfirmPasswordField';
import CheckBox from '../../../common/components/form/CheckBox';
import SubmitUserFormButton from '../../containers/SubmitUserFormButton';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    userId: PropTypes.number.isRequired
  }).isRequired
};

/**
 * @function ResetPassword
 * @param {Function} handleSubmit
 * @param {Function} submitForm
 * @param {Function} closeDialog
 * @returns {XML}
 */
function ResetPassword({ handleSubmit, submitForm, closeDialog }) {
  return (
    <Panel title="Reset password" panelHeadingClassName="users-from-panel-heading">
      <SystemMessage />
      <form onSubmit={handleSubmit(submitForm)} className="readmin-form inline users-form">
        <div className="row">
          <div className="col-md-6">
            <PasswordField floatingLabelText="Password" />
          </div>
          <div className="col-md-6">
            <ConfirmPasswordField floatingLabelText="Confirm Password" />
          </div>
          <div className="col-md-12 mt-4 mb-4">
            <Field
              name="forcePasswordChange"
              component={CheckBox}
              label="Require a change of password in the next sign in"
            />
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-md-6" />
          <div className="col-md-2 my-auto">
            <span className="cancel-link" onClick={closeDialog}>
              Cancel
            </span>
          </div>
          <div className="col-md-4">
            <SubmitUserFormButton label="Reset Password" />
          </div>
        </div>
      </form>
    </Panel>
  );
}

ResetPassword.propTypes = propTypes;

export default ResetPassword;
