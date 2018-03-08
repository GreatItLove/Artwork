import { connect } from 'react-redux';

import AddContactDialog from '../components/dialog/AddContactDialog';
import { closeContactAddDialog } from '../contactActions';

const mapStateToProps = state => ({
  adding: state.contact.adding,
});

const mapDispatchToProps = dispatch => ({
  closeAddDialog: () => {
    dispatch(closeContactAddDialog());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactDialog);
