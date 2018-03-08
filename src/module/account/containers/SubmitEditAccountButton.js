import { connect } from 'react-redux';

import SubmitBtnLoader from '../../common/components/form/SubmitBtnLoader';

const mapStateToProps = (state, ownProps) => ({
  label: ownProps.label,
  loading: state.account.loadingData || state.account.isTransfer
});

export default connect(mapStateToProps)(SubmitBtnLoader);
