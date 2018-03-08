import { connect } from 'react-redux';

import { closeUserResetPasswordDialog } from '../usersActions';
import ResetPasswordDialog from '../components/dialogs/ResetPasswordDialog';

const mapStateToProps = state => ({
  resettingPassword: state.users.resettingPassword !== false,
  userId: state.users.resettingPassword
});

const mapDispatchToProps = dispatch => ({
  closeResetPasswordDialog: () => {
    dispatch(closeUserResetPasswordDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordDialog);
