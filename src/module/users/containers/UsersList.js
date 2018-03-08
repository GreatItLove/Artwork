import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import UsersGriddle from '../components/table/UsersGriddle';
import FetchUsersIfNotExistHOC from '../HOCs/FetchUsersIfNotExistHOC';

const mapDispatchToProps = dispatch => ({
  appDispatch: dispatch
});
const mapStateToProps = state => ({
  list: state.users.list,
  pagination: state.users.pagination,
  shouldFetch: state.users.list.length === 0,
  fetching: state.users.fetching,
  searchFilter: state.users.searchFilter,
  showingFilter: state.users.showingFilter,
});

const enhance = compose(
  translate(['users']),
  FetchUsersIfNotExistHOC,
  connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(UsersGriddle);
