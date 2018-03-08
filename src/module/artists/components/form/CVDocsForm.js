import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import FontIcon from 'material-ui/FontIcon';
import Dropzone from 'react-dropzone'
import PropTypes from 'prop-types';
import ToolTip from 'react-portal-tooltip'
import SystemMessage from '../../../notifications/system/components/SystemMessage';
import Panel from '../../../common/components/Panel';
import SubmitArtistForm from '../../containers/SubmitArtistFormButton';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const propTypes = {
  submitForm: PropTypes.func.isRequired,
  artistsId: PropTypes.number,
};

const defaultProps = {
  initialValues: {},
};

const styles = {
  titleStyle: {
    fontWeight: "normal",
    fontSize: "1rem"
  },
  hint_label_style: {
    color: "#8F9082"
  },
  panel_headingStyle: {
    padding: "12px 30px"
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
  tabs: {
    width: '400px',
    display: 'inline-block',
    marginRight: '30px',
    verticalAlign: 'top'
  },
  links: {
    margin: 0,
    padding: 0
  },
  tabLink: {
    height: '30px',
    lineHeight: '30px',
    padding: '0 15px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    display: 'inline-block'
  },
  activeLinkStyle: {
    borderBottom: '2px solid #333'
  },
  visibleTabStyle: {
    display: 'inline-block'
  },
  content: {
  },
  toolbarStyle: {
    border: "1px solid #8F9082"
  },
  editorStyle: {
    border: "1px solid #8F9082",
    paddingLeft: "15px",
    height: "340px"
  },
  documentStyle: {
    color: "#1E6291",
    fontSize: "0.875rem",
    margin: "10px 0px",
    cursor: "pointer"
  },
  cursorPointer: {
    cursor: "pointer"
  },
  saveButton: {
    width: "140px",
    marginRight: "30px"
  },
  saveButtonStyle: {
    backgroundColor: "#E38925",
    borderRadius: "5px"
  }
};


function DropzoneArea({ parent, style, type, t }) {
  let dropzoneRef;
  return (
    <div style={style}>
      <div style={styles.documentStyle}>
        <span>{t('artists:edit.cvdoc.document')}</span>
      </div>
      <Dropzone className="dropzone_area" disableClick ref={(node) => { dropzoneRef = node }}
        onDrop={(acceptedFile) => {
          parent.setState({ [`file_${type}`]: acceptedFile[0] })
        }}>
        <i className="fa fa-paperclip" />
        {
          parent.state[`file_${type}`] ? <text className="artist-basic-description">{parent.state[`file_${type}`].name + "   "}</text>
            : null
        }
        <text className="artist-basic-description">{t('artists:edit.cvdoc.fileDragandDrop')}</text>
        <u style={styles.documentStyle} onClick={() => dropzoneRef.open()}>{t('artists:edit.cvdoc.selectFilesPC')}</u>

      </Dropzone>
    </div >
  )
}

function Footer({ parent, style, type, t }) {
  return (
    <div style={{ ...style, marginTop: "10px" }}>
      <div style={{ position: "absolute", left: "15px" }}>

        <FontIcon className="material-icons" id={type} style={{ ...styles.cursorPointer, ...styles.hint_label_style }} onMouseEnter={() => parent.showTooltip(type)} onMouseLeave={parent.hideTooltip}>help_outline</FontIcon>
      </div>
      <div style={{ justifyContent: "right", display: "grid" }}>

        <SubmitArtistForm
          onClick={() => parent.props.submitForm({
            artistsId: parent.props.artistsId,
            [type]: draftToHtml(convertToRaw(parent.props[`editorState_${type}`].getCurrentContent())),
            file: parent.state[`file_${type}`],
            field: type
          })}
          label={t('artists:edit.basic.save')}
          style={styles.saveButton}
          buttonStyle={styles.saveButtonStyle}
          labelStyle={{ textTransform: "none" }} />
      </div>
    </div>
  )
}
/**
 * @function CVDocsForm
 * @returns {XML}
        */
class CVDocsForm extends React.Component {
  //const { userId: isFormTypeEdit } = initialValues;
  state = { isTooltipActive: false, tipname: '' }

  constructor(props) {
    super(props)
    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)

    this.state = {
      file_description: null,
      file_biography: null,
      file_resume: null,
      file_statement: null,
      file_pressRelease: null,
      file_articles: null
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(editorState, tab) {
    this.props.editorStateChange(tab, editorState)
  }

  showTooltip(tipname) {
    this.setState({ isTooltipActive: true, tipname: tipname })
  }
  hideTooltip() {
    this.setState({ isTooltipActive: false })
  }
  render() {
    const { t } = this.props;
    return (
      <div>
        <SystemMessage />
        <Panel
          title={t('artists:edit.cvdoc.title')}
          titleStyle={styles.titleStyle}
          headingStyle={styles.panel_headingStyle}
          panelHeadingClassName="users-from-panel-heading">
          <div className="col-sm-12">
            <Tabs className="tabs tabs-1">
              <div className="tab-links">
                <TabLink to="description">{t('artists:edit.cvdoc.tab.description')}</TabLink>
                <TabLink to="biography">{t('artists:edit.cvdoc.tab.biography')}</TabLink>
                <TabLink to="resume">{t('artists:edit.cvdoc.tab.resume')}</TabLink>
                <TabLink to="statement">{t('artists:edit.cvdoc.tab.statement')}</TabLink>
                <TabLink to="pressRelease">{t('artists:edit.cvdoc.tab.pressRelease')}</TabLink>
                <TabLink to="articles">{t('artists:edit.cvdoc.tab.articles')}</TabLink>
              </div>
              <div style={styles.content}>
                <TabContent for="description">
                  <Editor
                    editorState={this.props.editorState_description}
                    onEditorStateChange={(e) => this.onEditorStateChange(e, 'description')}
                    toolbarStyle={styles.toolbarStyle}
                    editorStyle={styles.editorStyle}
                    placeholder={`${t('artists:edit.cvdoc.tab.description')}...`}
                    onPaste={() => console.log('paste')}
                  />
                  <Footer t={t} parent={this} type="description" />
                </TabContent>
                <TabContent for="biography">
                  <Editor
                    editorState={this.props.editorState_biography}
                    onEditorStateChange={(e) => this.onEditorStateChange(e, 'biography')}
                    toolbarStyle={styles.toolbarStyle}
                    editorStyle={styles.editorStyle}
                    placeholder={`${t('artists:edit.cvdoc.tab.biography')}...`}
                  />
                  <DropzoneArea t={t} type="biography" parent={this} />

                  <Footer t={t} parent={this} type="biography" />
                </TabContent>
                <TabContent for="resume">
                  <Editor
                    editorState={this.props.editorState_resume}
                    onEditorStateChange={(e) => this.onEditorStateChange(e, 'resume')}
                    toolbarStyle={styles.toolbarStyle}
                    editorStyle={styles.editorStyle}
                    placeholder={`${t('artists:edit.cvdoc.tab.resume')}...`}
                  />
                  <DropzoneArea t={t} type="resume" parent={this} />
                  <Footer t={t} parent={this} type="resume" />
                </TabContent>
                <TabContent for="statement">
                  <Editor
                    editorState={this.props.editorState_statement}
                    onEditorStateChange={(e) => this.onEditorStateChange(e, 'statement')}
                    toolbarStyle={styles.toolbarStyle}
                    editorStyle={styles.editorStyle}
                    placeholder={`${t('artists:edit.cvdoc.tab.statement')}...`}
                  />
                  <DropzoneArea t={t} type="statement" parent={this} />
                  <Footer t={t} parent={this} type="statement" />
                </TabContent>
                <TabContent for="pressRelease">
                  <Editor
                    editorState={this.props.editorState_pressRelease}
                    onEditorStateChange={(e) => this.onEditorStateChange(e, 'pressRelease')}
                    toolbarStyle={styles.toolbarStyle}
                    editorStyle={styles.editorStyle}
                    placeholder={`${t('artists:edit.cvdoc.tab.pressRelease')}...`}
                  />
                  <DropzoneArea t={t} type="pressRelease" parent={this} />
                  <Footer t={t} parent={this} type="pressRelease" />
                </TabContent>
                <TabContent for="articles">
                  <Editor
                    editorState={this.props.editorState_articles}
                    onEditorStateChange={(e) => this.onEditorStateChange(e, 'articles')}
                    toolbarStyle={styles.toolbarStyle}
                    editorStyle={styles.editorStyle}
                    placeholder={`${t('artists:edit.cvdoc.tab.articles')}...`}
                  />
                  <DropzoneArea t={t} type="articles" parent={this} />
                  <Footer t={t} parent={this} type="articles" />
                </TabContent>
              </div>
            </Tabs>
            <div className="col-12 pt20">
            </div>
          </div>
        </Panel >
        <ToolTip active={this.state.isTooltipActive} position="bottom" arrow="left" parent={`#${this.state.tipname}`} style={styles.hintWindow}>
          <div style={{ width: 230 }}>
            <p><text style={styles.hintWindowTextHeader}>{t(`artists:edit.cvdoc.hint.${this.state.tipname}.header`)}</text></p>
            <p><text style={styles.hintWindowTextBody}>{t(`artists:edit.cvdoc.hint.${this.state.tipname}.body`)}</text>
            </p>
          </div>
        </ToolTip>
      </div >
    );
  }

}

CVDocsForm.defaultProps = defaultProps;
CVDocsForm.propTypes = propTypes;

export default CVDocsForm;
