import userFieldsValidation from '../../common/validation/userFieldsValidation';

const validation = (values, t) => {
  const errors = {};
  const validate = userFieldsValidation(t);
  errors.password = validate.password(values.password);
  errors.confirmPassword = validate.confirmPassword(values.confirmPassword, values.password);

  return errors;
};

export default validation;
