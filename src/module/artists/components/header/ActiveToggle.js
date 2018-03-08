import React from 'react';
import { connect } from 'react-redux';
import Toggle from 'material-ui/Toggle';
import { compose } from 'recompose';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';

import { patchArtistRequest } from '../../artistsActions';
const styles = {
  toggle: {
    marginBottom: 16,
  },
  thumbSwitched: {
    backgroundColor: '#E18928',
  },
  trackSwitched: {
    backgroundColor: '#FEBE69',
  },
  labelStyle: {
    color: '#8F9082'
  }
};

const propTypes = {
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      colorBrandOrange: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  activeArtist: PropTypes.func.isRequired,
};

/**
 * @function ActiveToggle
 * @param {Object} muiTheme material ui theme object
 * @param {Function} activeArtist
 * @returns {XML}
 */
function ActiveToggle({ muiTheme, activeArtist, active, artistsId }) {
  return (
    <Toggle
      label="ACTIVE"
      labelStyle={styles.labelStyle}
      style={styles.toggle}
      thumbSwitchedStyle={styles.thumbSwitched}
      trackSwitchedStyle={styles.trackSwitched}
      defaultToggled={active}
      onToggle={(obj, b) => { activeArtist({ active: b, artistsId: artistsId }); }}
    />
  );
}

ActiveToggle.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  activeArtist: data => {
    const { artistsId, ...rest } = data;
    dispatch(patchArtistRequest(rest, artistsId));
  },
});

const mapStateToProps = state => ({
  active: state.artists.artistInfo.active,
  artistsId: state.artists.artistInfo.artistsId
})

const enhance = compose(muiThemeable(), connect(mapStateToProps, mapDispatchToProps));

export { ActiveToggle as ActiveToggleTest };

export default enhance(ActiveToggle);
