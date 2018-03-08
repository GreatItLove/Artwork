import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import FetchUsersIfNotExistHOC from '../HOCs/FetchUsersIfNotExistHOC';
import resetPasswordFormValidation from '../validation/resetPasswordFormValidation';
import ResetPasswordForm from '../components/form/ResetPasswordForm';
import { updateUserRequest } from '../usersActions';

const FORM_NAME = 'restePassword';

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    userId: ownProps.userId
  }
});
const mapDispatchToProps = dispatch => ({
  submitForm: data => {
    const { password, forcePasswordChange = false, userId } = data;
    dispatch(updateUserRequest({ password, forcePasswordChange, userId }));
  }
});

const enhance = compose(
  FetchUsersIfNotExistHOC,
  translate(['account', 'validation']),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: FORM_NAME,
    validate: (values, { t }) => resetPasswordFormValidation(values, t)
  })
);
export default enhance(ResetPasswordForm);
