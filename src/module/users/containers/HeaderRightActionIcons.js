import { connect } from 'react-redux';

import HeaderRightActionIcons from '../../common/components/header/HeaderRightActionIcons';
import { openUserAddDialog, usersDownloadPathRequest, openUserDownloadDialog } from '../usersActions';

const mapDispatchToProps = dispatch => ({
  openAddDialog: () => {
    dispatch(openUserAddDialog());
  },
  openDownloadDialog: () => {
    dispatch(usersDownloadPathRequest());
    dispatch(openUserDownloadDialog());
  },
});

export default connect(null, mapDispatchToProps)(HeaderRightActionIcons);
