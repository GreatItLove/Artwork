import React from 'react';
import { Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { Toggle, SelectField, DatePicker } from 'redux-form-material-ui';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';
import ToolTip from 'react-portal-tooltip'
import SystemMessage from '../../../notifications/system/components/SystemMessage';
import Panel from '../../../common/components/Panel';
import InputField from '../../../common/components/form/InputField';
import SubmitArtistForm from '../../containers/SubmitArtistFormButton';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};

const defaultProps = {
  initialValues: {},
};

const styles = {
  block: {
    width: 160,
    marginRight: "20px"
  },
  toggle: {
    marginBottom: 16,
  },
  thumbSwitched: {
    backgroundColor: '#E18928',
  },
  trackSwitched: {
    backgroundColor: '#FEBE69',
  },
  titleStyle: {
    fontWeight: "normal",
    fontSize: "1rem"
  },
  panel_headingStyle: {
    padding: "12px 30px"
  },
  label_style: {
    color: "#8F9082",
    fontSize: "0.675rem"
  },
  label_basics_style: {
    color: "#8F9082",
    fontSize: "0.75rem"
  },
  input_style: {
    color: "#123F61",
  },
  underline_style: {
    border: "1px solid #1E6291"
  },
  margin_ng10_top: {
    marginTop: "-10px"
  },
  vertical_devider: {
    borderRight: "1px solid #979797"
  },
  contact_mail_icon: {
    color: "#66A4C0",
    marginRight: "10px"
  },
  toggle_label_style: {
    fontSize: "0.875rem",
    color: "#123F61"
  },
  hint_label_style: {
    color: "#8F9082"
  },
  tooltips: {
    display: "flex"
  },
  cursorPointer: {
    cursor: "pointer"
  },
  font14: {
    fontSize: "0.875rem"
  },
  hintWindow: {
    style: {
      background: '#FFFFCC',
      padding: 20,
      borderColor: '#DDDDDD',
      boxShadow: '0px 1px 5px rgba(0,0,0,.5)'
    },
    arrowStyle: {
      color: '#FFFFCC',
      borderColor: '#DDDDDD'
    }
  },
  hintWindowTextHeader: {
    color: "#52443C",
    fontSize: "12px"
  },
  hintWindowTextBody: {
    color: "#52443C",
    fontSize: "13px"
  },
  genwizrd: {
    fontSize: "14px",
    color: "#66A4C0",
    lineHeight: "50px"
  }
};
/**
 * @function BasicArtistForm
 * @param {Function} handleSubmit
 * @param {Function} submitForm
 * @param {Object} initialValues
 * @returns {XML}
 */
class BasicArtistForm extends React.Component {
  //const { userId: isFormTypeEdit } = initialValues;
  state = { isTooltipActive: false, tipname: '' }

  constructor(props) {
    super(props)
    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)
  }

  showTooltip(tipname) {
    this.setState({ isTooltipActive: true, tipname: tipname })
  }
  hideTooltip() {
    this.setState({ isTooltipActive: false })
  }
  render() {
    const { t, handleSubmit, submitForm } = this.props;
    return (
      <div>
        <SystemMessage />

        <form
          onSubmit={handleSubmit(submitForm)}
          className="readmin-form users-form">
          <Panel
            title={t('artists:edit.basic.title')}
            titleStyle={styles.titleStyle}
            headingStyle={styles.panel_headingStyle}

            panelHeadingClassName="users-from-panel-heading">
            <div className="col-sm-12" style={{ marginBottom: "25px" }}>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <text style={styles.label_style}> {t('artists:edit.firstName')}: </text>
                  <Field
                    id="your-first-name"
                    placeholder={t('artists:edit.firstName')}
                    name="firstName"
                    fullWidth={true}
                    component={InputField}
                    inputStyle={styles.input_style}
                    underlineFocusStyle={styles.underline_style}
                    style={styles.margin_ng10_top}
                    autoComplete="new-username"
                  />
                </div>
                <div className="col-md-4">
                  <text style={styles.label_style}> {t('artists:edit.middle')}: </text>
                  <Field
                    id="your-middle-name"
                    placeholder={t('artists:edit.middle')}
                    name="middle"
                    fullWidth={true}
                    component={InputField}
                    inputStyle={styles.input_style}
                    underlineFocusStyle={styles.underline_style}
                    style={styles.margin_ng10_top}
                    hintStyle={styles.hint_label_style}
                    autoComplete="new-username"
                  />
                </div>
                <div className="col-md-4">
                  <text style={styles.label_style}> {t('artists:edit.lastName')}: <sup style={{ color: "red" }}>*</sup></text>
                  <Field
                    id="your-last-name"
                    placeholder={t('artists:edit.lastName')}
                    name="lastName"
                    fullWidth={true}
                    component={InputField}
                    inputStyle={styles.input_style}
                    underlineFocusStyle={styles.underline_style}
                    style={styles.margin_ng10_top}
                    hintStyle={styles.hint_label_style}
                    autoComplete="new-username"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row align-items-center">
                <div className="col-md-6" style={styles.vertical_devider}>
                  <text className="aritst-basic-text">
                    <i className="material-icons" style={styles.contact_mail_icon} >contact_mail</i>
                    <u style={styles.contact_text}> {t('artists:edit.reviewContactInformation')}</u></text>
                  <text className="aritst-basic-contact"><div>1234 Address St.,</div>
                    <div>Buffalo, NY 14222</div>
                    <div>United States</div></text>
                </div>
                <div className="col-md-6">
                  <text className="artist-basic-description">
                    {this.props.artistInfo.firstName} {this.props.artistInfo.lastName} is also the Consignor.
                    Currently there are {this.props.artistInfo.stats ? this.props.artistInfo.stats.artwork.sold + this.props.artistInfo.stats.artwork.active + this.props.artistInfo.stats.artwork.total : null} works(s)
                     and {this.props.artistInfo.stats ? this.props.artistInfo.stats.lineItems : null} Line Item(s) associated with {this.props.artistInfo.firstName} {this.props.artistInfo.lastName} 's
                    Consignor record. You may remove this Consignor record for {this.props.artistInfo.firstName} {this.props.artistInfo.lastName} however, these works will be re-assigned to your default 'GalleryOwned' consignor. </text>
                </div>
              </div>
            </div>
          </Panel >

          <Panel
            titleStyle={styles.titleStyle}
            headingStyle={styles.panel_headingStyle}
            title={t('artists:edit.basic.options')}
            panelHeadingClassName="users-from-panel-heading">

            <div className="col-sm-12" style={styles.font14}>
              <div >
                <div style={styles.tooltips}>
                  <div style={styles.block}>
                    <Field
                      id="your-featured-artist"
                      label={t('artists:edit.basic.featuredArtist')}
                      name="featured"
                      component={Toggle}
                      labelStyle={styles.toggle_label_style}
                      thumbSwitchedStyle={styles.thumbSwitched}
                      trackSwitchedStyle={styles.trackSwitched}
                    />
                  </div>
                  <FontIcon className="material-icons" id="featured" style={{ ...styles.cursorPointer, ...styles.hint_label_style }} onMouseEnter={() => this.showTooltip('featured')} onMouseLeave={this.hideTooltip}>help_outline</FontIcon>
                </div>
                <div style={styles.toggle} />
                <div style={styles.tooltips}>
                  <div style={styles.block}>
                    <Field
                      id="your-nonArtist-artist"
                      label={t('artists:edit.basic.nonArtist')}
                      name="nonArtist"
                      component={Toggle}
                      labelStyle={styles.toggle_label_style}
                      thumbSwitchedStyle={styles.thumbSwitched}
                      trackSwitchedStyle={styles.trackSwitched}
                    />
                  </div>
                  <FontIcon className="material-icons" id="nonArtist" style={{ ...styles.cursorPointer, ...styles.hint_label_style }} onMouseEnter={() => this.showTooltip('nonArtist')} onMouseLeave={this.hideTooltip}>help_outline</FontIcon>
                </div>
                <div style={styles.toggle} />
                <div style={styles.tooltips}>
                  <div style={styles.block}>
                    <Field
                      id="your-taxFree-artist"
                      label={t('artists:edit.basic.taxFree')}
                      name="taxFree"
                      component={Toggle}
                      labelStyle={styles.toggle_label_style}
                      thumbSwitchedStyle={styles.thumbSwitched}
                      trackSwitchedStyle={styles.trackSwitched}
                    />
                  </div>
                  <FontIcon className="material-icons" id="taxFree" style={{ ...styles.cursorPointer, ...styles.hint_label_style }} onMouseEnter={() => this.showTooltip('taxFree')} onMouseLeave={this.hideTooltip}>help_outline</FontIcon>
                </div>
              </div>
              <div style={styles.toggle} />

              <text style={styles.label_basics_style}> {t('artists:edit.basic.genre')}:</text>
              <div className="row" style={styles.margin_ng10_top}>
                <div className="col-md-3">
                  <Field
                    id="your-genre-name"
                    placeholder="Genre"
                    name="genre"
                    fullWidth={true}
                    component={SelectField}
                    style={styles.font14}
                  >
                    {
                      this.props.genres.map((item) => {
                        return (
                          <MenuItem value={item} primaryText={item} key={item} />
                        )
                      })
                    }
                  </Field>
                </div>
                <div className="col-md-5">
                  <Field
                    id="your-add-new-genre"
                    placeholder={t('artists:edit.basic.addNewGenre')}
                    name="addGenre"
                    fullWidth={true}
                    component={InputField}
                    inputStyle={styles.input_style}
                    style={styles.font14}
                    underlineFocusStyle={styles.underline_style}
                    hintStyle={styles.hint_label_style}
                    autoComplete="new-username"
                  />
                </div>
                <div className="col-md-3">
                  <u style={styles.genwizrd}> {t('artists:edit.basic.genwizrd')}</u>
                </div>
              </div>

              <text style={styles.label_basics_style}> {t('artists:edit.basic.category')}:</text>
              <div className="row" style={styles.margin_ng10_top}>
                <div className="col-md-3">
                  <Field
                    id="your-category"
                    placeholder="Category"
                    name="category"
                    fullWidth={true}
                    component={SelectField}
                    style={styles.font14}
                  >
                    {
                      this.props.categories.map((item) => {
                        return (
                          <MenuItem value={item} primaryText={item} key={item} />
                        )
                      })
                    }
                  </Field>
                </div>
                <div className="col-md-5">
                  <Field
                    id="your-add-new-category"
                    placeholder={t('artists:edit.basic.addNewCategory')}
                    name="addCategory"
                    fullWidth={true}
                    component={InputField}
                    autoComplete="new-username"
                    inputStyle={styles.input_style}
                    style={styles.font14}
                    underlineFocusStyle={styles.underline_style}
                    hintStyle={styles.hint_label_style}
                  />
                </div>

              </div>

              <div className="row align-items-center">
                <div className="col-md-3">
                  <Field
                    id="your-date-start"
                    placeholder={t('artists:edit.basic.dateStart')}
                    name="dateStart"
                    fullWidth={true}
                    component={DatePicker}
                    inputStyle={styles.input_style}
                    textFieldStyle={styles.font14}
                    container="inline"
                    autoOk={true}
                    underlineFocusStyle={styles.underline_style}
                  />
                </div>
                <div className="col-md-5">
                  <text style={styles.label_basics_style}> E.g., (YYYY-MM-DD) </text>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-3">
                  <Field
                    id="your-date-end"
                    placeholder={t('artists:edit.basic.dateEnd')}
                    name="dateEnd"
                    fullWidth={true}
                    component={DatePicker}
                    inputStyle={styles.input_style}
                    textFieldStyle={styles.font14}
                    container="inline"
                    autoOk={true}
                    underlineFocusStyle={styles.underline_style}
                  />
                </div>
                <div className="col-md-5">
                  <text style={styles.label_basics_style}> E.g., (YYYY-MM-DD) </text>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-3">
                  <Field
                    id="your-discipline"
                    placeholder={t('artists:edit.basic.discipline')}
                    name="discipline"
                    fullWidth={true}
                    component={InputField}
                    inputStyle={styles.input_style}
                    style={styles.font14}
                    underlineFocusStyle={styles.underline_style}
                  />
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-3">
                  <Field
                    id="your-birth-date"
                    placeholder={t('artists:edit.basic.birthDate')}
                    name="birthDate"
                    fullWidth={true}
                    component={DatePicker}
                    inputStyle={styles.input_style}
                    textFieldStyle={styles.font14}
                    container="inline"
                    autoOk={true}
                    underlineFocusStyle={styles.underline_style}
                  />
                </div>
                <div className="col-md-5">
                  <text style={styles.label_basics_style}> {t('artists:edit.basic.displaysOnWebsite')} </text>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-3">
                  <Field
                    id="your-birth-place"
                    placeholder="Birth Place"
                    name="birthPlace"
                    fullWidth={true}
                    component={InputField}
                    inputStyle={styles.input_style}
                    style={styles.font14}
                    underlineFocusStyle={styles.underline_style}
                  />
                </div>
                <div className="col-md-5">
                  <text style={styles.label_basics_style}> {t('artists:edit.basic.displaysOnWebsite')} </text>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-md-3">
                  <Field
                    id="your-deceased"
                    placeholder={t('artists:edit.basic.deceased')}
                    name="deceased"
                    fullWidth={true}
                    component={InputField}
                    inputStyle={styles.input_style}
                    style={styles.font14}
                    underlineFocusStyle={styles.underline_style}
                  />
                </div>
                <div className="col-md-5">
                  <text style={styles.label_basics_style}> {t('artists:edit.basic.displaysOnWebsite')} </text>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-3">
                  <Field
                    id="your-website"
                    placeholder={t('artists:edit.basic.website')}
                    name="website"
                    fullWidth={true}
                    component={InputField}
                    inputStyle={styles.input_style}
                    style={styles.font14}
                    underlineFocusStyle={styles.underline_style}
                  />
                </div>
                <div className="col-md-5">
                  <text style={styles.label_basics_style}> {t('artists:edit.basic.displaysOnWebsite')} </text>
                </div>
              </div>
            </div>
            <div className="col-12 pt20">
              <div className="row" style={{ justifyContent: "right", display: "grid" }}>

                <SubmitArtistForm label={t('artists:edit.basic.save')} style={{ width: "140px", marginRight: "30px" }}
                  buttonStyle={{ backgroundColor: "#E38925", borderRadius: "5px" }}
                  labelStyle={{ textTransform: "none" }} />
              </div>
            </div>
          </Panel >
        </form >
        <ToolTip active={this.state.isTooltipActive} position="bottom" arrow="center" parent={`#${this.state.tipname}`} style={styles.hintWindow}>
          <div style={{ width: 230 }}>
            <p><text style={styles.hintWindowTextHeader}>{t(`artists:edit.basic.hint.${this.state.tipname}.header`)}</text></p>
            <p><text style={styles.hintWindowTextBody}>{t(`artists:edit.basic.hint.${this.state.tipname}.body`)}</text>
            </p>
          </div>
        </ToolTip>
      </div >
    );
  }

}

BasicArtistForm.defaultProps = defaultProps;
BasicArtistForm.propTypes = propTypes;

export default BasicArtistForm;
