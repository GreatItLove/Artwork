import { connect } from 'react-redux';

import { fetchLogsRequest } from '../logsActions';
import Notification from '../../notifications/profile/components/Notification';

const mapDispatchToProps = dispatch => ({
  fetchLogs: data => dispatch(fetchLogsRequest(data))
});
const mapStateToProps = (state, ownProps) => ({
  logsData: state.logs.logsData,
  logsLoading: state.logs.logsLoading,
  logsError: state.logs.logsError
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
