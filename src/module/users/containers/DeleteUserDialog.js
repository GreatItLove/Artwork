import { connect } from 'react-redux';
import { compose } from 'recompose';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { deleteUserRequest, closeUserDeleteDialog } from '../usersActions';
import LoaderHOC from '../../common/HOCs/LoaderHOC';
import DeleteUserDialog from '../components/dialogs/DeleteUserDialog';

const mapStateToDispatch = dispatch => ({
  deleteUsers: userId => {
    dispatch(deleteUserRequest(userId));
  },
  closeDialog: () => {
    dispatch(closeUserDeleteDialog());
  }
});

const mapStateToProps = state => ({
  openDialog: state.users.deleting !== false,
  loading: state.users.deleting === true,
  userId: state.users.deleting
});

const enhance = compose(connect(mapStateToProps, mapStateToDispatch), LoaderHOC('loading', true), muiThemeable());
export default enhance(DeleteUserDialog);
