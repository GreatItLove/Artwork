import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { translate } from 'react-i18next';

import BasicArtistForm from '../components/form/BasicArtistForm';
import { patchArtistRequest } from '../artistsActions';
import basicArtistFormValidation from '../validation/basicArtistFormValidation';

const formatDate = (date) => {
  var month = '' + (date.getMonth() + 1)
  var day = '' + date.getDate()
  var year = date.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

const mapDispatchToProps = (dispatch, props) => ({
  submitForm: data => {
    const { artistsId, ...rest } = data;
    if (rest.dateStart) rest.dateStart = formatDate(rest.dateStart)
    if (rest.dateEnd) rest.dateEnd = formatDate(rest.dateEnd)
    if (rest.birthDate) rest.birthDate = formatDate(rest.birthDate)
    dispatch(patchArtistRequest(rest, artistsId));
  },
});

const mapStateToProps = state => (
  {
    initialValues: {
      firstName: state.artists.artistInfo.firstName,
      lastName: state.artists.artistInfo.lastName,
      middle: state.artists.artistInfo.middle,
      featured: state.artists.artistInfo.featured,
      nonArtist: state.artists.artistInfo.nonArtist,
      taxFree: state.artists.artistInfo.taxFree,
      genre: state.artists.artistInfo.genre,
      category: state.artists.artistInfo.category,
      dateStart: state.artists.artistInfo.dateStart ? new Date(parseInt(state.artists.artistInfo.dateStart, 10) * 1000) : null,
      dateEnd: state.artists.artistInfo.dateEnd ? new Date(parseInt(state.artists.artistInfo.dateEnd, 10) * 1000) : null,
      discipline: state.artists.artistInfo.discipline,
      birthDate: state.artists.artistInfo.birthDate ? new Date(state.artists.artistInfo.birthDate) : null,
      birthPlace: state.artists.artistInfo.birthPlace,
      deceased: state.artists.artistInfo.deceased,
      website: state.artists.artistInfo.website,
      artistsId: state.artists.artistInfo.artistsId,
    },
    categories: state.artists.categories,
    genres: state.artists.genres,
    artistInfo: state.artists.artistInfo
  })

const enhance = compose(
  translate(['account', 'validation', 'artists']),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'basicArtist',
    validate: (values, { t }) => basicArtistFormValidation(values, t),
  }),
);

export default enhance(BasicArtistForm);
