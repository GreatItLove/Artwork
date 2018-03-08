import { connect } from 'react-redux';

import HeaderRightActionIcons from '../../common/components/header/HeaderRightActionIcons';
import { openArtistAddDialog, artistDownloadPathRequest, openArtistDownloadDialog } from '../artistsActions';

const mapDispatchToProps = dispatch => ({
  openAddDialog: () => {
    dispatch(openArtistAddDialog());
  },
  openDownloadDialog: () => {
    dispatch(artistDownloadPathRequest());
    dispatch(openArtistDownloadDialog());
  },
});

export default connect(null, mapDispatchToProps)(HeaderRightActionIcons);
