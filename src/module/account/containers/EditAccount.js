import { reduxForm, change, untouch } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { updateAccountRequest, transferStatusRequest, fetchAccountRrequest } from '../actions/accountActions';
import { addSysMessage } from '../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_INFO } from '../../../config/general';
import EditAccountForm from '../components/EditAccountForm';
import editAccountValidation from '../validation/editAccountValidation';
import { fetchUsersRequest } from '../../users/usersActions';

const FORM_NAME = 'editAccountForm';

const mapStateToProps = state => ({
  initialValues: {
    fullName: state.account.fullName,
    email: state.account.email,
    userId: state.account.userId
  },
  list: state.users.list,
  account: state.account
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => {
    dispatch(updateAccountRequest(data));
  },
  addSysMessage: message => {
    dispatch(addSysMessage(message, SYS_MESSAGE_TYPE_INFO));
  },
  resetPasswords: fields => {
    fields.forEach(field => {
      dispatch(change(FORM_NAME, field, ''));
      dispatch(untouch(FORM_NAME, field));
    });
  },
  resetTransferEmail: field => {
    dispatch(change(FORM_NAME, field, ''));
  },
  fetchUsersRequest: () => {
    dispatch(fetchUsersRequest());
  },
  fetchAccountRrequest: () => {
    dispatch(fetchAccountRrequest());
  },
  transferStatus: data => {
    dispatch(transferStatusRequest(data));
  }
});

const enhance = compose(
  translate(['account', 'validation']),
  connect(mapStateToProps, mapDispatchToProps),
  muiThemeable(),
  reduxForm({
    form: FORM_NAME,
    validate: (values, { t }) => editAccountValidation(values, t)
  })
);

export default enhance(EditAccountForm);
