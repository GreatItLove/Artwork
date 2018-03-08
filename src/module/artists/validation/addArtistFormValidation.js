import userFieldsValidation from '../../common/validation/userFieldsValidation';

const validation = (values, t) => {
  const errors = {};
  const validate = userFieldsValidation(t);
  errors.fullName = validate.fullName(values.fullName);

  return errors;
};

export default validation;
