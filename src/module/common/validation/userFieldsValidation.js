import validator from 'validator';
import { MAX_EMAIL_LENGTH, MAX_FULL_NAME_LENGTH } from '../../../config/validation';

/**
 * @description Validation of users fields
 * @param {Function} t translate function
 * @return {Object} error object
 */
const userFieldsValidation = t => {
  const isEmpty = value => validator.isEmpty(value);
  const maxLength = (value, length) => value.length > length;

  const fullName = (fullName = '') => {
    if (isEmpty(fullName)) return t('validation:required');
    if (maxLength(fullName.trim(), MAX_FULL_NAME_LENGTH))
      return t('validation:maxLength', {
        fieldName: 'Full name',
        maxLength: MAX_FULL_NAME_LENGTH
      });
  };
  const email = (email = '') => {
    if (isEmpty(email)) return t('validation:required');
    if (!validator.isEmail(email)) return t('validation:invalidEmail');
    if (maxLength(email, MAX_EMAIL_LENGTH))
      return t('validation:maxLength', {
        fieldName: 'email',
        maxLength: MAX_EMAIL_LENGTH
      });
  };
  const oldpassword = (oldpassword = '') => {
    if (isEmpty(oldpassword)) return t('validation:required');
  };
  const password = (password = '') => {
    if (isEmpty(password)) return t('validation:required');
  };
  const confirmPassword = (confirmPassword = '', password = '') => {
    if (isEmpty(confirmPassword)) return t('validation:required');
    if (!validator.equals(confirmPassword, password))
      return t('validation:notMatch', {
        field1: 'Password',
        field2: 'confirm password'
      });
  };

  const date = (date = '') => {
    if (isEmpty(date)) return '';
    var bits = date.split('-');
    var d = new Date(bits[0], bits[1] - 1, bits[2]);
    return d && (d.getMonth() + 1) === bits[1] ? '' : t('validation:invalidDate');
  }

  return {
    fullName,
    email,
    oldpassword,
    password,
    confirmPassword,
    date
  };
};

export default userFieldsValidation;
