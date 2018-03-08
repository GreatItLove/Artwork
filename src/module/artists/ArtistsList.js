import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';
import ArtistsGriddle from './components/table/ArtistsGriddle';
import FetchGenresIfNotExistHOC from './HOCs/FetchGenresIfNotExistHOC'

const mapDispatchToProps = dispatch => ({
  appDispatch: dispatch,
});
const mapStateToProps = state => ({
  list: state.artists.list,
  selectedCheckBox: state.artists.selectedCheckBox,
  searchFilter: state.artists.searchFilter,
  pagination: state.artists.pagination,
  shouldFetch: state.artists.list.length === 0,
  fetching: state.artists.fetching,
  genres: state.artists.genres,
  showingFilter: state.artists.showingFilter
});

const enhance = compose(
  translate(['artists']),
  FetchGenresIfNotExistHOC,
  connect(mapStateToProps, mapDispatchToProps),
);
export default enhance(ArtistsGriddle);
