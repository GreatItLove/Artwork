import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SystemMessage from '../../notifications/system/components/SystemMessage';

const propTypes = {
  showSystemMessage: PropTypes.bool.isRequired
};

/**
 * @function SystemMessageOnUserList
 * @param {Boolean} showSystemMessage
 * @returns {XML}
 */
function SystemMessageOnUserList({ showSystemMessage }) {
  return showSystemMessage && <SystemMessage />;
}

SystemMessageOnUserList.propTypes = propTypes;

const mapStateToProps = state => ({
  showSystemMessage: !(state.users.adding || state.users.editing || state.users.resettingPassword)
});
export default connect(mapStateToProps)(SystemMessageOnUserList);
