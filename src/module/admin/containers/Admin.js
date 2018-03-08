import React, { Component } from 'react';
import { connect } from 'react-redux';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import PropTypes from 'prop-types';

import AdminPanel from '../components/AdminPanel';
import { fetchAccountRrequest } from '../../account/actions/accountActions';
import { logout } from '../../auth/authActions';

const propTypes = {
  isAccountDataFetched: PropTypes.bool.isRequired,
  loadingError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  fetchAccount: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const style = {
  refreshIndicator: { position: 'absolute', top: '30%', left: '45%' }
};

/**
 * @class Admin
 * @extends React.Component
 * @description Render component
 */
class Admin extends Component {
  componentDidMount() {
    const { isAccountDataFetched, loading } = this.props;
    if (!isAccountDataFetched && !loading) {
      this.props.fetchAccount();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { loadingError } = nextProps;
    return !loadingError;
  }

  componentWillReceiveProps(nextProps) {
    const { loadingError } = nextProps;
    if (loadingError) {
      this.props.logout();
    }
  }

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { isAccountDataFetched } = this.props;
    return !isAccountDataFetched ? (
      <div style={style.refreshIndicator}>
        <RefreshIndicator left={0} top={0} status="loading" />
      </div>
    ) : (
      <AdminPanel />
    );
  }
}

Admin.propTypes = propTypes;

const mapStateToProps = state => ({
  isAccountDataFetched: state.account.isFetchedData,
  loadingError: state.account.loadingError
});

const mapDispatchToProps = dispatch => ({
  fetchAccount: () => {
    dispatch(fetchAccountRrequest());
  },
  logout: () => {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
