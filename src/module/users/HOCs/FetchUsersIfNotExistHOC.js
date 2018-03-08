import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { fetchUsersRequest } from '../usersActions';

const mapDispatchToProps = dispatch => ({
  fetch: (data = {}) => {
    dispatch(fetchUsersRequest(data));
  },
});

const mapStateToProps = state => ({
  shouldFetch: state.users.list.length === 0,
  fetchingUsers: state.users.fetching,
});

const FetchUsersIfNotExistHOC = WrappedComponent => {
  /**
   * @class FetchUsersIfNotExistHOC
   * @extends React.Component
   * @description Render component
   */
  class FetchUsersIfNotExist extends Component {
    componentDidMount() {
      const { shouldFetch, fetch } = this.props;
      if (shouldFetch) {
        fetch({ limit: 25, offset: 0 });
      }
    }
    /**
     * @description render
     * @return {Object} JSX HTML Content
     */
    render() {
      const { fetchingUsers, shouldFetch, ...rest } = this.props;
      return <WrappedComponent {...rest} />;
    }
  }

  const enhance = compose(connect(mapStateToProps, mapDispatchToProps));
  return enhance(FetchUsersIfNotExist);
};

export default FetchUsersIfNotExistHOC;
