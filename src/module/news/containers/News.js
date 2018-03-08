import { connect } from 'react-redux';

import { fetchNewsRequest } from '../newsActions';
import NewsTemplate from '../components/NewsTemplate';

const mapDispatchToProps = dispatch => ({
  fetchNews: data => dispatch(fetchNewsRequest(data))
});
const mapStateToProps = (state, ownProps) => ({
  newsData: state.news.newsData,
  newsLoading: state.news.newsLoading,
  newsError: state.news.newsError
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsTemplate);
