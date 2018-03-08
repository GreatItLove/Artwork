import userFieldsValidation from '../../common/validation/userFieldsValidation';

const validation = (values, t) => {
  const errors = {};
  const validate = userFieldsValidation(t);
  errors.fullName = validate.fullName(values.fullName);
  errors.email = validate.email(values.email);
  errors.password = validate.password(values.password);
  errors.confirmPassword = validate.confirmPassword(values.confirmPassword, values.password);

  return errors;
};

export default validation;
