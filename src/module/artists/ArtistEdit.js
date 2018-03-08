import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { compose } from 'recompose';
import { Tabs, Tab } from 'material-ui/Tabs';
import Panel from '../common/components/Panel';
import GetArtistInfoHOC from './HOCs/GetArtistInfoHOC'
import BasicArtist from './containers/BasicArtist'
import CVDocs from './containers/CVDocs'
import HeaderEditsRightActionIcon from './components/header/HeaderEditsRightActionIcon'
/**
 * @function ArtistEdit
 * @returns {XML}
 */

const tabWidth = [9, 7, 9, 11, 13, 10, 10, 10, 10, 11]
const leftCalc = (id) => {
  var cal = 0
  for (var i = 0; i < id; i++) cal += tabWidth[i]
  return cal
}

const styles = {
  panel_headingStyle: {
    padding: "7px 30px",
    borderBottomColor: "#66A4C0"
  },
  panel_background: {
    backgroundColor: "#EFF6F9"
  },
  tabBar: {
    backgroundColor: "white",
    height: "38px"
  },
  tabItemContainerStyle: {
    paddingTop: "18px"
  },
  tabBarInkColor: {
    backgroundColor: "#66A4C0",
    width: "auto"
  },
  flexDisplay: {
    display: "flex"
  },
  artistImage: {
    width: "195px",
    height: "195px",
    backgroundColor: "#DDDDDD",
    border: "1px solid #8F9082"
  },
  artistInfo: {
    borderRight: "1px solid #8F9082",
    width: "30%",
    height: "195px",
    fontSize: "0.875rem",
    color: "#123F61",
    marginLeft: "30px",
    lineHeight: "22px"
  },
  inventoryInfo: {
    borderRight: "1px solid #8F9082",
    width: "20%",
    height: "195px",
    fontSize: "0.875rem",
    lineHeight: "22px",
    color: "#123F61",
    marginLeft: "30px",
    display: "flex",
    flexDirection: "column"
  },
  artistInfoWidth: {
    marginRight: "10px",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    lineHeight: "22px",
    color: "#123F61"
  },
  tickFont: {
    color: "#123F61",
    fontSize: "16px"
  },
  titleFont: {
    fontWeight: 'bold'
  }
}
class ArtistEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 }
    this.getButtonStyle = this.getButtonStyle.bind(this);
  }

  getButtonStyle(index) {
    const baseStyle = { fontSize: "1rem", height: "auto", fontWeight: "300" }
    if (index !== 9) {
      baseStyle.borderRight = "1px solid lightgrey";
    }
    return index === this.state.selected ? { color: "#66A4C0", ...baseStyle } : { color: "#8F9082", ...baseStyle }
  }

  render() {
    const { t, artistInfo } = this.props;

    return (

      <div>
        <Panel title={`${this.props.artistInfo.firstName} ${this.props.artistInfo.lastName}`}
          rightElement={<HeaderEditsRightActionIcon />}
          style={styles.panel_background}
          headingStyle={styles.panel_headingStyle}
          t={t}>
          <div style={styles.flexDisplay}>
            <img alt="Unable to load image" src="https://www.gstatic.com/webp/gallery3/1_webp_ll.png" style={styles.artistImage}></img>

            <div style={styles.artistInfo}>
              <div style={{ marginBottom: "30px" }}>
                <text style={styles.titleFont}>{t('edit.consignorType')} : {artistInfo.type} </text>
                <text>{artistInfo.address} </text>
              </div>
              <div style={styles.flexDisplay}>
                <div style={styles.artistInfoWidth}>
                  <text>{t('edit.commission')} : </text>
                  <text>{t('edit.maxDiscount')} : </text>
                  <text>{t('edit.consignorsVat')} : </text>
                  <text>{t('edit.agreementInfo')} : </text>
                </div>
                <div style={styles.artistInfoWidth}>
                  <text>{(artistInfo.commission * 100).toFixed(2)}%</text>
                  <text>{(artistInfo.maxDiscount * 100).toFixed(2)}%</text>
                  <text>{(artistInfo.consignorsVat * 100).toFixed(2)}%</text>
                  <text>{artistInfo.agreement}</text>
                </div>
              </div>
            </div>
            <div style={styles.inventoryInfo}>
              <text style={styles.titleFont}>{t('edit.inventory')}</text>
              <NavLink to={""} style={{ color: "#66a4c0" }}> View Artwork </NavLink>
              <div style={styles.flexDisplay}>
                <div style={styles.artistInfoWidth}>
                  <text>{t('edit.active')} : </text>
                  <text>{t('edit.inactive')} : </text>
                  <text>{t('edit.sold')} : </text>
                  <text>{t('edit.total')} : </text>
                </div>
                {
                  artistInfo.stats ?
                    <div style={styles.artistInfoWidth}>
                      <text style={styles.titleFont}>{artistInfo.stats.artwork.active}</text>
                      <text style={styles.titleFont}>{artistInfo.stats.artwork.inactive}</text>
                      <text style={styles.titleFont}>{artistInfo.stats.artwork.sold}({(artistInfo.stats.artwork.sold * 100 / artistInfo.stats.artwork.total).toFixed(0)}%)</text>
                      <text style={styles.titleFont}>{artistInfo.stats.artwork.total}</text>
                    </div>
                    : null
                }
              </div>
            </div>
            <div style={{ marginLeft: "30px", ...styles.artistInfoWidth }}>
              <text style={styles.titleFont}>{t('edit.seoSuggestion')}</text>
              <div>
                <i className="fa fa-check" style={styles.tickFont} /><text>{t('edit.keywords')} : </text>
              </div>
              <text style={styles.titleFont}>{t('edit.cvdocs')}</text>
              <div>
                <i className="fa fa-check" style={styles.tickFont} /><text>{t('edit.cvdoc.tab.description')}</text>
              </div>
              <div>
                <i className="fa fa-check" style={styles.tickFont} /><text>{t('edit.cvdoc.tab.biography')}</text>
              </div>
              <div>
                <i className="fa fa-check" style={styles.tickFont} /><text>{t('edit.cvdoc.tab.statement')}</text>
              </div>
              <div>
                <i className="fa fa-check" style={styles.tickFont} /><text>{t('edit.cvdoc.tab.pressReleases')}</text>
              </div>
              <div>
                <i className="fa fa-check" style={styles.tickFont} /><text>{t('edit.cvdoc.tab.resume')}</text>
              </div>
            </div>
          </div>
        </Panel>
        <Tabs inkBarStyle={{ ...styles.tabBarInkColor, width: `${tabWidth[this.state.selected]}%`, left: `${leftCalc(this.state.selected)}%` }} tabItemContainerStyle={styles.tabBar} contentContainerStyle={styles.tabItemContainerStyle} initialSelectedIndex={this.state.selected}>
          <Tab label={t('edit.basics')} style={{ width: `${tabWidth[0]}%` }} buttonStyle={this.getButtonStyle(0)} onActive={() => this.setState({ selected: 0 })} >
            <BasicArtist />
          </Tab>
          <Tab label={t('edit.seo')} style={{ width: `${tabWidth[1]}%` }} buttonStyle={this.getButtonStyle(1)} onActive={() => this.setState({ selected: 1 })} >

          </Tab>
          <Tab label={t('edit.stats')} style={{ width: `${tabWidth[2]}%` }} buttonStyle={this.getButtonStyle(2)} onActive={() => this.setState({ selected: 2 })} >
          </Tab>
          <Tab label={t('edit.agreement')} style={{ width: `${tabWidth[3]}%` }} buttonStyle={this.getButtonStyle(3)} onActive={() => this.setState({ selected: 3 })} >
          </Tab>
          <Tab label={t('edit.commissions')} style={{ width: `${tabWidth[4]}%` }} buttonStyle={this.getButtonStyle(4)} onActive={() => this.setState({ selected: 4 })} >
          </Tab>
          <Tab label={t('edit.returns')} style={{ width: `${tabWidth[5]}%` }} buttonStyle={this.getButtonStyle(5)} onActive={() => this.setState({ selected: 5 })} >
          </Tab>
          <Tab label={t('edit.cvdocs')} style={{ width: `${tabWidth[6]}%` }} buttonStyle={this.getButtonStyle(6)} onActive={() => this.setState({ selected: 6 })} >
            <CVDocs />
          </Tab>
          <Tab label={t('edit.displays')} style={{ width: `${tabWidth[7]}%` }} buttonStyle={this.getButtonStyle(7)} onActive={() => this.setState({ selected: 7 })} >
          </Tab>

          <Tab label={t('edit.labels')} style={{ width: `${tabWidth[8]}%` }} buttonStyle={this.getButtonStyle(8)} onActive={() => this.setState({ selected: 8 })} >
          </Tab>

          <Tab label={t('edit.artwork')} style={{ width: `${tabWidth[9]}%` }} buttonStyle={this.getButtonStyle(9)} onActive={() => this.setState({ selected: 9 })} >
          </Tab>
        </Tabs>


      </div >
    );
  }
}

const mapStateToProps = state => (
  {
    artistInfo: state.artists.artistInfo
  })


const enhance = compose(
  translate(['artists']),
  connect(mapStateToProps, null),
  GetArtistInfoHOC
);
export default enhance(ArtistEdit);
