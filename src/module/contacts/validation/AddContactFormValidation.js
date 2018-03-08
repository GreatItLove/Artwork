import userFieldsValidation from '../../common/validation/userFieldsValidation';

const addContactFormValidation = (values, t) => {
  const errors = {};
  const validate = userFieldsValidation(t);
  errors.firstName = validate.fullName(values.firstName);
  errors.lastName = validate.fullName(values.lastName);
  errors.eMail = validate.email(values.eMail);
  errors.country = validate.fullName(values.country);
  return errors;
};

export default addContactFormValidation;
