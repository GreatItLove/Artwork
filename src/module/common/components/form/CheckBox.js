import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const CheckBox = ({ input, label, iconStyle }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
    iconStyle={iconStyle}
  />
);

export default CheckBox;
