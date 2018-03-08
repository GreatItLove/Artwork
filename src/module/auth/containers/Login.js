import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';

import LoginForm from '../components/LoginForm';
import AuthLayout from '../HOCs/AuthLayout';
import { loginRequest as loginAction } from '../authActions';
import * as routes from '../../../config/routesPatch';

const mapDispatchToProps = dispatch => ({
  login: data => {
    dispatch(loginAction(data));
  }
});

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    startPage: state.auth.startPage || routes.ADMIN_PANEL_BASE_PATH,
  },
});

const reduxFormOption = {
  form: 'login',
  validate: (values, { t }) => {
    const errors = {};
    if (!values.username) errors.username = t('validation:required');
    if (!values.password) errors.password = t('validation:required');
    return errors;
  },
};
const enhance = compose(
  translate(['auth', 'validation']),
  AuthLayout,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm(reduxFormOption)
);

export default enhance(LoginForm);
