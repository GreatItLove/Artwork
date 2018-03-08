import React from 'react';
import SelectFieldMUI from 'material-ui/SelectField';

const SelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectFieldMUI
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

export default SelectField;
