import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  organization: PropTypes.string.isRequired
};

/**
 * @function HeaderOrganisationName
 * @param {String} organization
 * @returns {XML}
 */
function HeaderOrganisationName({ organization }) {
  return <h6>{organization}</h6>;
}

const mapStateToProps = state => ({
  organization: state.customer.organization
});

HeaderOrganisationName.propTypes = propTypes;

export { HeaderOrganisationName as HeaderOrganisationNameTest };

export default connect(mapStateToProps)(HeaderOrganisationName);
