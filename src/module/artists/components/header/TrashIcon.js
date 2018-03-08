import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { compose } from 'recompose';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';
import { deleteArtist } from '../../artistsActions';
import { withRouter } from "react-router-dom";

const propTypes = {
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      colorBrandOrange: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  deleteArtistId: PropTypes.func.isRequired,
};

/**
 * @function TrashIcon
 * @param {Object} muiTheme material ui theme object
 * @param {Function} deleteArtistId
 * @returns {XML}
 */
function TrashIcon({ muiTheme, deleteArtistId, history, artistsId }) {
  return (
    <IconButton
      //backgroundColor={muiTheme.palette.colorBrandOrange}
      style={{ boxShadow: 'none' }}
      children={<FontIcon className="material-icons" color="grey">delete</FontIcon>}
      onClick={() => { deleteArtistId(artistsId); history.push('/artists') }}
    />
  );
}

TrashIcon.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  deleteArtistId: (id) => {
    dispatch(deleteArtist(id));
  },
});
const mapStateToProps = state => ({
  artistsId: state.artists.artistInfo.artistsId
})
const enhance = compose(muiThemeable(), connect(mapStateToProps, mapDispatchToProps), withRouter);

export { TrashIcon as TrashIconTest };

export default enhance(TrashIcon);
