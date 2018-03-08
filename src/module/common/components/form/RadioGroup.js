import React from 'react';
import { RadioButtonGroup } from 'material-ui/RadioButton';

/**
 * @function RadioGroup
 * @param props
 * @returns {XML}
 */
function RadioGroup({ input, ...rest }) {
  return (
    <RadioButtonGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  );
}

export default RadioGroup;
