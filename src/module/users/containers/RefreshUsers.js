import { connect } from 'react-redux';

import RefreshIcon from '../../common/components/header/RefreshIcon';
import { fetchUsersRequest, switchUsersFilter, updateSearchFilter } from '../usersActions';

const mapDispatchToProps = dispatch => ({
  refresh: () => {
    dispatch(fetchUsersRequest({ limit: 25, offset: 0 }));
    dispatch(switchUsersFilter(false));
    dispatch(updateSearchFilter({}));
  },
});

export default connect(null, mapDispatchToProps)(RefreshIcon);
