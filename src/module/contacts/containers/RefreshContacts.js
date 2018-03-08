import { connect } from 'react-redux';

import RefreshIcon from '../../common/components/header/RefreshIcon';
import { fetchContactRequest, clearCheckedContacts, switchContactsFilter, updateSearchFilter } from '../contactActions';

const mapDispatchToProps = dispatch => ({
  refresh: () => {
    dispatch(fetchContactRequest({ limit: 25, offset: 0 }));
    dispatch(clearCheckedContacts());
    dispatch(switchContactsFilter(false));
    dispatch(updateSearchFilter({}));
  },
});

export default connect(null, mapDispatchToProps)(RefreshIcon);
