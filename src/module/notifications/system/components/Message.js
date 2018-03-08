import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { SYS_MESSAGE_TYPE_ERROR, SYS_MESSAGE_TYPE_SUCCESS, SYS_MESSAGE_TYPE_INFO } from '../../../../config/general';

const propTypes = {
  removeMessage: PropTypes.func.isRequired,
  messageType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

/**
 * @class Message
 * @extends React.Component
 * @description Render component
 */
class Message extends Component {
  componentDidMount() {
    this.timeOutID = setTimeout(() => {
      this.removeMesage();
    }, 6000);
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutID);
  }

  handleClickOutside() {
    this.removeMesage();
  }
  removeMesage = () => {
    this.props.removeMessage();
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { message, messageType } = this.props;
    const alertClassNames = classnames('alert', {
      'alert-danger': messageType === SYS_MESSAGE_TYPE_ERROR,
      'alert-success': messageType === SYS_MESSAGE_TYPE_SUCCESS,
      'alert-info': messageType === SYS_MESSAGE_TYPE_INFO
    });
    return (
      <div className={alertClassNames} role="alert">
        <button onClick={this.removeMesage} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {message}
      </div>
    );
  }
}
Message.propTypes = propTypes;

export { Message as MessageTest };

export default enhanceWithClickOutside(Message);
