import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getArtistInfoRequest } from '../artistsActions';
import LoaderHOC from '../../common/HOCs/LoaderHOC';

const mapDispatchToProps = dispatch => ({
  appDispatch: dispatch
});

const mapStateToProps = state => ({
  artistInfo: state.artists.artistInfo,
  list: state.artists.list,
  fetchingArtistInfo: state.artists.fetchingArtistInfo,
});

const GetArtistInfoRequestHOC = WrappedComponent => {
  /**
   * @class FetchUsersIfNotExistHOC
   * @extends React.Component
   * @description Render component
   */
  class GetArtistInfoRequest extends Component {
    componentDidMount() {
      const { artistInfo, appDispatch, match: { params: { id } }, list } = this.props;
      if (artistInfo === undefined || artistInfo.artistsId !== parseInt(id, 10)) {
        appDispatch(getArtistInfoRequest(id));
      }
    }
    /**
     * @description render
     * @return {Object} JSX HTML Content
     */
    render() {
      const { appDispatch, ...rest } = this.props;
      return <WrappedComponent {...rest} />;
    }
  }

  const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    LoaderHOC('fetchingArtistInfo', true)
  );
  return enhance(GetArtistInfoRequest);
};

export default GetArtistInfoRequestHOC;
