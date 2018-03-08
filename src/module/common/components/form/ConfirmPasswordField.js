import React from 'react';

import { Field } from 'redux-form';

import InputField from './InputField';

/**
 * @function ConfirmPasswordField
 * @param {Object} props input props
 * @returns {XML}
 */
function ConfirmPasswordField(props) {
  return (
    <Field
      id="confirmPassword"
      name="confirmPassword"
      type="password"
      fullWidth={true}
      component={InputField}
      autoComplete="new-confirm-password"
      {...props}
    />
  );
}

export default ConfirmPasswordField;
