import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired
};

function InputField({ meta: { touched, error } = {}, input: { ...inputProps }, ...props }) {
  return <TextField errorText={touched && error} {...inputProps} {...props} fullWidth />;
}

InputField.propTypes = propTypes;

export default InputField;
