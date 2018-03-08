import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import BulkUpdateContactDialog from '../components/dialog/BulkUpdateContactDialog';
import { closeBulkUpdateContactDialog } from '../contactActions';

const mapDispatchToProps = dispatch => ({
  closeBulkUpdateDialog: () => {
    dispatch(closeBulkUpdateContactDialog());
  },
});

const mapStateToProps = (state, ownProps) => ({
  updating: state.contact.updating,
});

const enhance = compose(
  translate(['contacts']),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(BulkUpdateContactDialog);
