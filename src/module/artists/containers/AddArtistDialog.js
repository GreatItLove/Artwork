import {connect} from 'react-redux';

import AddArtistDialog from '../components/dialogs/AddArtistDialog';
import {closeArtistAddDialog} from '../artistsActions';

const mapStateToProps = state => ({
  adding: state.artists.adding,
});

const mapDispatchToProps = dispatch => ({
  closeAddDialog: () => {
    dispatch(closeArtistAddDialog());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddArtistDialog);
