import userFieldsValidation from '../../common/validation/userFieldsValidation';

const basicArtistFormValidation = (values, t) => {
  const errors = {};
  const validate = userFieldsValidation(t);
  errors.lastName = validate.fullName(values.lastName);
  return errors;
};

export default basicArtistFormValidation;
