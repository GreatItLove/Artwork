import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RefreshIndicator } from 'material-ui';

import convertTimestamp from '../../../utility/convertTimestamp';

const propTypes = {
  newsData: PropTypes.object,
  newsLoading: PropTypes.bool,
  newsError: PropTypes.string,
  fetchNews: PropTypes.func.isRequired
};

class NewsTemplate extends Component {
  componentWillMount() {
    let data = {
      homePage: 1,
      limit: 1
    }
    this.props.fetchNews(data);
  }
  render() {
    const { newsData, newsLoading, newsError } = this.props;
    return newsLoading ? (
      <RefreshIndicator style={{ position: 'relative', margin: '0 auto' }} left={0} top={0} status="loading" />
    ) : newsData !== null ? (
      <div>
        <h5>{convertTimestamp(newsData.newsDate)}</h5>
        <h1>{newsData.newsTitle}</h1>
        <p>{newsData.newsLoginTeaser}</p>
        <p>
          <a href="/"> Read more ></a>
        </p>
      </div>
    ) : (
          <div>{newsError}</div>
        );
  }
}

NewsTemplate.propTypes = propTypes;

export default NewsTemplate;
