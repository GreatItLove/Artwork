import { connect } from 'react-redux';
import { compose } from 'recompose';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { closeUserSuspendDialog, updateUserRequest } from '../usersActions';
import { getUserForChangingActive } from '../usersSelectors';
import LoaderHOC from '../../common/HOCs/LoaderHOC';
import SuspendUserDialog from '../components/dialogs/SuspendUserDialog';

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(closeUserSuspendDialog());
  },
  updateStatus: user => {
    const { userId, active } = user;
    dispatch(updateUserRequest({ userId, active: !active }));
  }
});

const mapStateToProps = state => ({
  openDialog: state.users.changingActive !== false,
  user: getUserForChangingActive(state),
  loading: !!(state.users.loading && state.users.changingActive)
});

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), LoaderHOC('loading', true), muiThemeable());

export default enhance(SuspendUserDialog);
