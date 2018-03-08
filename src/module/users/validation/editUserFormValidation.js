import userFieldsValidation from '../../common/validation/userFieldsValidation';

const validate = (values, t) => {
  const errors = {};
  const validate = userFieldsValidation(t);
  errors.fullName = validate.fullName(values.fullName);
  errors.email = validate.email(values.email);
  return errors;
};

export default validate;
