import { connect } from 'react-redux';

import EditUserDialog from '../components/dialogs/EditUserDialog';
import { closeUserEditDialog } from '../usersActions';

const mapStateToProps = state => ({
  editing: state.users.editing !== false,
  userId: state.users.editing
});

const mapDispatchToProps = dispatch => ({
  closeEditDialog: () => {
    dispatch(closeUserEditDialog());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserDialog);
