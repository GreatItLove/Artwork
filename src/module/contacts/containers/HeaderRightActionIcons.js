import { connect } from 'react-redux';

import HeaderRightActionIcons from '../../common/components/header/HeaderRightActionIcons';
import { openContactAddDialog, contactDownloadPathRequest, openContactDownloadDialog } from '../contactActions';

const mapDispatchToProps = dispatch => ({
  openAddDialog: () => {
    dispatch(openContactAddDialog());
  },
  openDownloadDialog: () => {
    dispatch(contactDownloadPathRequest());
    dispatch(openContactDownloadDialog());
  },
});

export default connect(null, mapDispatchToProps)(HeaderRightActionIcons);
