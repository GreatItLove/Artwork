import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';
import muiThemeable from 'material-ui/styles/muiThemeable';

import FileDownloadDialog from '../../common/components/dialogs/FileDownloadDialog';
import { closeContactDownloadDialog } from '../contactActions';

const mapDispatchToProps = dispatch => ({
  closeDownloadDialog: () => {
    dispatch(closeContactDownloadDialog());
  },
});

const mapStateToProps = (state, ownProps) => ({
  fetching: state.contact.fetchingDownloadpath,
  downloading: state.contact.downloading,
  downloadPath: state.contact.downloadPath,
});

const enhance = compose(
  muiThemeable(),
  translate(['contacts']),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(FileDownloadDialog);
