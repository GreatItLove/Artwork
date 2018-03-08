import React, { Component } from 'react';
import { reduxForm, change, untouch } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import FetchUsersIfNotExistHOC from '../HOCs/FetchUsersIfNotExistHOC';
import UserForm from '../components/form/UserForm';
import editUserFormValidation from '../validation/editUserFormValidation';
import { getUserById } from '../usersSelectors';
import { updateUserRequest } from '../usersActions';

const FORM_NAME = 'editUser';
/**
 * @class EditForm
 * @extends React.Component
 * @description Render component
 */
class EditForm extends Component {
  handleSubmitEditForm = data => {
    this.props.submitForm(data);
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { submitForm, ...rest } = this.props;
    return <UserForm submitForm={this.handleSubmitEditForm} {...rest} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: getUserById(state, ownProps.userId)
  };
};

const mapDispatchToProps = dispatch => ({
  submitForm: data => {
    const {
      lastLogin,
      browserInfo,
      ip,
      numLogins,
      logins,
      confirmPassword,
      ...rest
    } = data;
    dispatch(updateUserRequest(rest));
  },
  resetPasswords: fields => {
    fields.forEach(field => {
      dispatch(change(FORM_NAME, field, ''));
      dispatch(untouch(FORM_NAME, field));
    });
  }
});

const enhance = compose(
  FetchUsersIfNotExistHOC,
  translate(['account', 'validation']),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: FORM_NAME,
    validate: (values, { t }) => editUserFormValidation(values, t)
  })
);

export default enhance(EditForm);
