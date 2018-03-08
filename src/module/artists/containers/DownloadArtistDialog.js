import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';
import muiThemeable from 'material-ui/styles/muiThemeable';

import FileDownloadDialog from '../../common/components/dialogs/FileDownloadDialog';
import { closeArtistDownloadDialog } from '../artistsActions';

const mapDispatchToProps = dispatch => ({
  closeDownloadDialog: () => {
    dispatch(closeArtistDownloadDialog());
  },
});

const mapStateToProps = (state, ownProps) => ({
  fetching: state.artists.fetchingDownloadpath,
  downloading: state.artists.downloading,
  downloadPath: state.artists.downloadPath,
});

const enhance = compose(
  muiThemeable(),
  translate(['artists']),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(FileDownloadDialog);
