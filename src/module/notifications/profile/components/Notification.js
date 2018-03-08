import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _map from 'lodash/map';
import _head from 'lodash/head';
import _toUpper from 'lodash/toUpper';
import TimeAgo from 'react-timeago';
import { RefreshIndicator, Avatar } from 'material-ui';
import ActionReportProblem from 'material-ui/svg-icons/action/report-problem';

const propTypes = {
  fetchLogs: PropTypes.func.isRequired,
  logsLoading: PropTypes.bool.isRequired,
  logsData: PropTypes.array,
  logsError: PropTypes.string
};

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  showAllNotifications() {
    const { logsLoading, logsData, logsError } = this.props;
    return logsLoading ? (
      <div>
        <RefreshIndicator left={150} top={100} status="loading" />
      </div>
    ) : logsData.length ? (
      <div>
        {_map(logsData, (notification, key) => {
          return (
            <div key={key} className="notification-single">
              <div className="avatar">
                <Avatar
                  size={30}
                  icon={!notification.fullName ? <ActionReportProblem /> : null}
                  backgroundColor={this.statusColor(notification.logType)}>
                  {notification.fullName
                    ? _toUpper(_head(notification.fullName))
                    : ''}
                </Avatar>
              </div>
              <p className="details">
                {notification.name ? <a href="">{notification.name}</a> : ''}
                <span>{this.activityMsg(notification)}</span>
              </p>
              <p className="time">
                <TimeAgo date={parseInt(notification.dateCreated, 10) * 1000} />
              </p>
            </div>
          );
        })}
      </div>
    ) : (
          <div>{logsError}</div>
        );
  }
  activityMsg = notification => {
    const { fullName, resourceType, details, logType } = notification;
    let fields, id;
    if (resourceType !== 'login') {
      id = JSON.parse(details).id;
      fields = JSON.parse(details).fields;
    }
    if (resourceType === 'login') return details;
    if (logType === 'edit') return `${fullName} updated ${resourceType} ${id}. Updated field(s): ${fields}`;
    if (logType === 'add') return `${fullName} created a new ${resourceType} - ${id}`;
    if (logType === 'delete') return `${fullName} deleted a ${resourceType} - ${id}`;
  };
  statusColor = type => {
    if (type === 'add' || type === 'Successful Login') return '#98e099';
    if (type === 'edit') return '#69a6de';
    if (type === 'delete' || type === 'Failed Login') return '#ec7e81';
  };
  showNotification = () => {
    const { toggle } = this.state;
    if (!toggle) {
      this.props.fetchLogs({ limit: 20 });
    }
    this.setState({ toggle: !toggle });
  };
  render() {
    const toggleNotification = classNames({
      'slide-content': true,
      toggle: this.state.toggle
    });
    return (
      <div>
        <button className="notification-trigger an-circle-icon-btn notification" onClick={this.showNotification}>
          <i className="fa fa-flash" />
        </button>
        <div className={toggleNotification}>
          <h6>Latest Activities</h6>
          {this.showAllNotifications()}
        </div>
      </div>
    );
  }
}

Notification.propTypes = propTypes;

export default Notification;
