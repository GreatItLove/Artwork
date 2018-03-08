import userFieldsValidation from '../../common/validation/userFieldsValidation';

const validate = (values, t) => {
  const errors = {};
  const validate = userFieldsValidation(t);
  errors.fullName = validate.fullName(values.fullName);
  errors.email = validate.email(values.email);
  if (values.changePassword) {
    errors.oldpassword = validate.oldpassword(values.oldpassword);
    errors.password = validate.password(values.password);
    errors.confirmPassword = validate.confirmPassword(values.confirmPassword, values.password);
  }
  return errors;
};

export default validate;
