import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import CVDocsForm from '../components/form/CVDocsForm';
import { patchArtistRequest, editorStateChange } from '../artistsActions';

const mapDispatchToProps = dispatch => ({
  submitForm: data => {
    const { artistsId, ...rest } = data;
    //console.log(rest)
    //if (rest.field && rest[rest.field] === null) rest[rest.field] = "<p></p>"
    dispatch(patchArtistRequest(rest, artistsId));
  },
  editorStateChange: (type, state) => {
    dispatch(editorStateChange(type, state));
  }
});

const mapStateToProps = state => (
  {
    artistsId: state.artists.artistInfo.artistsId,
    artistInfo: state.artists.artistInfo,
    editorState_description: state.artists.editorState_description,
    editorState_biography: state.artists.editorState_biography,
    editorState_resume: state.artists.editorState_resume,
    editorState_statement: state.artists.editorState_statement,
    editorState_pressRelease: state.artists.editorState_pressRelease,
    editorState_articles: state.artists.editorState_articles
  })

const enhance = compose(
  translate(['account', 'validation', 'artists']),
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(CVDocsForm);
