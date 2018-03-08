import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

import CheckBox from '../../../common/components/form/CheckBox';
import convertTimestamp from '../../../../utility/convertTimestamp';

const propTypes = {
  initialValues: PropTypes.object
};

const defaultProps = {
  initialValues: {}
};

class LastLoginInfo extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false
    };
  }
  handleCheckBox = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
  renderLoginInfo = () => {
    const { isChecked } = this.state;
    const { initialValues } = this.props;
    const lastLoginClass = classNames({
      'filter-open': isChecked,
      'filter-hidden': !isChecked,
    });
    let lastLogin;
    let element = document.getElementById('Lastlogin');
    if (element !== null) {
      lastLogin = element.getBoundingClientRect();
    }
    const styles = {
      height: isChecked ? lastLogin.height : 0,
      overflow: 'hidden',
    };
    return (
      <div
        className={lastLoginClass}
        style={styles}>
        {!_isEmpty(initialValues) && initialValues.lastLogin ? (
          <div id="Lastlogin" className="py-3 users lastLoginContainer">
            <div className="col-sm-12 row align-items-center py-2">
              <div className="col-md-4">IP Address:</div>
              <div className="col-md-8">{initialValues.ip}</div>
            </div>
            <div className="col-sm-12 row align-items-center py-2">
              <div className="col-md-4">Browser Info:</div>
              <div className="col-md-8">{initialValues.browserInfo}</div>
            </div>
            <div className="col-sm-12 row align-items-center py-2">
              <div className="col-md-4">Logins</div>
              <div className="col-md-8">{initialValues.numLogins}</div>
            </div>
            <div className="col-sm-12 row py-2">
              <div className="col-md-4">Last 5 Logins</div>
              <div className="col-md-8" style={{ left: '-25px' }}>
                {_map(initialValues.logins, (login, key) => (
                  <div key={key} className="col-sm-12 row align-items-center py-2">
                    <div className="col-sm-12 pl-4">{`${key + 1}. ${convertTimestamp(login)}`}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
            <div id="Lastlogin" className="py-3 pl-3 users lastLoginContainer">No Login details found</div>
          )}
      </div>
    );
  };
  render() {
    return (
      <div className="py-4">
        <div className="col-sm-12 pb-2">
          <div className="row align-items-center">
            <div className="col-md-4">
              <label>View Logins:</label>
            </div>
            <div className="col-md-8">
              <Field name="viewLogin" onChange={this.handleCheckBox} component={CheckBox} label="" />
            </div>
          </div>
        </div>
        {this.renderLoginInfo()}
      </div>
    );
  }
}

LastLoginInfo.propTypes = propTypes;

LastLoginInfo.defaultProps = defaultProps;

export default LastLoginInfo;
