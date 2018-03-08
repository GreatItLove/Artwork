import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { removeSysMessage } from '../sysMessageAction';
import Message from './Message';

const propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
  removeSysMessage: PropTypes.func.isRequired
};

/**
 * @function SystemMessage
 * @param {String} message
 * @param {String} messageType
 * @param {Function} removeSysMessage
 * @returns {XML}
 */
function SystemMessage({ message, messageType, removeSysMessage }) {
  const open = message.length > 0;
  return open && <Message removeMessage={removeSysMessage} messageType={messageType} message={message} />;
}

SystemMessage.propTypes = propTypes;

const mapStateToProps = state => ({
  message: state.sysMessage.message,
  messageType: state.sysMessage.messageType
});

const mapDispatchToProps = dispatch => ({
  removeSysMessage: () => dispatch(removeSysMessage())
});

export { SystemMessage as SystemMessageTest };

export default connect(mapStateToProps, mapDispatchToProps)(SystemMessage);
