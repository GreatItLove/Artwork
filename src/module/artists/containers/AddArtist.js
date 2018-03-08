import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import ArtistForm from '../components/form/ArtistForm';
import { addArtistRequest } from '../artistsActions';
import addArtistFormValidation from '../validation/addArtistFormValidation';

const mapDispatchToProps = dispatch => ({
  submitForm: data => {
    const { ...rest } = data;
    dispatch(addArtistRequest(rest));
  },
});

const enhance = compose(
  translate(['account', 'validation', 'artists']),
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'addArtist',
    validate: (values, { t }) => addArtistFormValidation(values, t),
  }),
);

export default enhance(ArtistForm);
