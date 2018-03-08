import React from 'react';
import { Field } from 'redux-form';

import InputField from './InputField';

/**
 * @function PasswordField
 * @param {Object} props input field props
 * @returns {XML}
 */
function PasswordField(props) {
  return (
    <Field
      id="password"
      name="password"
      type="password"
      fullWidth={true}
      component={InputField}
      autoComplete="new-password"
      {...props}
    />
  );
}

export default PasswordField;
