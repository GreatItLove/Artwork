import { connect } from 'react-redux';

import AddUserDialog from '../components/dialogs/AddUserDialog';
import { closeUserAddDialog } from '../usersActions';

const mapStateToProps = state => ({
  adding: state.users.adding
});

const mapDispatchToProps = dispatch => ({
  closeAddDialog: () => {
    dispatch(closeUserAddDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserDialog);
