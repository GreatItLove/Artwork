import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { fetchGenresRequest } from '../artistsActions';
import LoaderHOC from '../../common/HOCs/LoaderHOC';

const mapDispatchToProps = dispatch => ({
  fetchGenres: () => {
    dispatch(fetchGenresRequest());
  },
});

const mapStateToProps = state => ({
  shouldFetch: state.artists.genres.length === 0,
  fetchingGenres: state.artists.fetchingGenres,
});

const FetchGenresIfNotExistHOC = WrappedComponent => {
  /**
   * @class FetchUsersIfNotExistHOC
   * @extends React.Component
   * @description Render component
   */
  class FetchGenresIfNotExist extends Component {
    componentDidMount() {
      const { shouldFetch, fetchGenres } = this.props;
      if (shouldFetch) {
        fetchGenres();
      }
    }
    /**
     * @description render
     * @return {Object} JSX HTML Content
     */
    render() {
      const { fetchingGenres, shouldFetch, ...rest } = this.props;
      return <WrappedComponent {...rest} />;
    }
  }

  const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    LoaderHOC('fetchingGenres', true)
  );
  return enhance(FetchGenresIfNotExist);
};

export default FetchGenresIfNotExistHOC;
