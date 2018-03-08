import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

/**
 * @function SubmitBtnLoader
 * @param {String} label
 * @param {Boolean} loading
 * @param {Object} rest
 * @returns {XML}
 */
function SubmitBtnLoader({ label, loading, ...rest }) {
  const { dispatch, ...restProps } = rest;
  return loading ? (
    <RefreshIndicator style={{ position: 'relative', margin: '0 auto' }} left={0} top={0} status="loading" />
  ) : (
      <RaisedButton type="submit" label={label} primary={true} fullWidth={true} {...restProps} />
    );
}

SubmitBtnLoader.propTypes = propTypes;

export default SubmitBtnLoader;
