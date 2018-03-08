import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';
import muiThemeable from 'material-ui/styles/muiThemeable';

import FileDownloadDialog from '../../common/components/dialogs/FileDownloadDialog';
import { closeUserDownloadDialog } from '../usersActions';

const mapDispatchToProps = dispatch => ({
  closeDownloadDialog: () => {
    dispatch(closeUserDownloadDialog());
  },
});

const mapStateToProps = (state, ownProps) => ({
  fetching: state.users.fetchingDownloadpath,
  downloading: state.users.downloading,
  downloadPath: state.users.downloadPath,
});

const enhance = compose(
  muiThemeable(),
  translate(['users']),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(FileDownloadDialog);
