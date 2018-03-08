import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IMAGE_BASE_PATH } from '../../../../config/general';
import { logout as logoutAction } from '../../../auth/authActions';
import { LOGIN_PATH, ACCOUNT_EDIT_PATH, USERS_LIST_PATH } from '../../../../config/routesPatch';

const propTypes = {
  logout: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired
};

class AvatarDropdown extends Component {
  state = {
    openMenu: false
  };

  handleOnRequestChange = value => {
    this.setState({
      openMenu: value
    });
  };

  render() {
    const style = {
      zIndex: '1500'
    };

    const avatarImage = IMAGE_BASE_PATH + this.props.logo;

    return (
      <div>
        <IconMenu
          style={style}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          useLayerForClickAway={true}
          iconButtonElement={
            <IconButton>
              <Avatar src={avatarImage} size={35} />
            </IconButton>
          }
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem primaryText="Billing" leftIcon={<i className="material-icons">monetization_on</i>} />
          <MenuItem
            primaryText="User Accounts"
            leftIcon={<i className="material-icons">account_box</i>}
            containerElement={<Link to={USERS_LIST_PATH} />}
          />
          <MenuItem
            primaryText="Edit Account"
            leftIcon={<i className="material-icons">lock</i>}
            containerElement={<Link to={ACCOUNT_EDIT_PATH} />}
          />
          <MenuItem
            primaryText="Settings"
            leftIcon={<i className="material-icons">settings</i>}
            menuItems={[
              <MenuItem
                key="Website"
                primaryText="Website"
                menuItems={[
                  <MenuItem key="Technical" primaryText="Technical" />,
                  <MenuItem key="Website" primaryText="Website" />,
                  <MenuItem key="Design" primaryText="Design" />,
                  <MenuItem key="LogosImages" primaryText="Logos & Images" />,
                  <MenuItem key="SocialNetworks" primaryText="Social Networks" />,
                  <MenuItem key="WebLocations" primaryText="Web Locations" />,
                  <MenuItem key="SiteAdministrator" primaryText="Site Administrator" />,
                  <MenuItem key="ImagesSizeLogos" primaryText="Images Size & Logos" />
                ]}
              />,
              <MenuItem key="InvoiceEcommerce" primaryText="Invoice/Ecommerce" />,
              <MenuItem
                key="Artwork"
                primaryText="Artwork"
                menuItems={[
                  <MenuItem key="AddingArtwork" primaryText="Adding Artwork" />,
                  <MenuItem key="SearchResults" primaryText="Search Results" />,
                  <MenuItem key="TearSheets" primaryText="Tear Sheets" />,
                  <MenuItem key="COASettings" primaryText="COA Settings" />,
                  <MenuItem key="DoWhatUponSold" primaryText="Do What Upon Sold" />
                ]}
              />,
              <MenuItem key="AddingContacts" primaryText="Adding Contacts" />,
              <MenuItem key="Consignments" primaryText="Consignments" />,
              <MenuItem
                key="DataTools"
                primaryText="Data Tools"
                menuItems={[
                  <MenuItem key="EditPrices" primaryText="Edit Prices" />,
                  <MenuItem key="EditShipCharges" primaryText="Edit Ship Charges" />,
                  <MenuItem key="EditShipCosts" primaryText="Edit Ship Costs" />,
                  <MenuItem key="EditSoldActiveSequence" primaryText="Edit Sold/Active/Sequence" />,
                  <MenuItem key="DisplayHidePricesEcom" primaryText="Display/Hide Prices/Ecom" />,
                  <MenuItem key="EditWizardMultipurpose" primaryText="Edit Wizard - Multipurpose" />,
                  <MenuItem key="ArtworkEditFilter" primaryText="Artwork Edit Filter" />,
                  <MenuItem key="CleanMedium" primaryText="Clean Medium" />,
                  <MenuItem key="CleanMedia" primaryText="Clean Media" />,
                  <MenuItem key="CleanCollection" primaryText="Clean Collection" />,
                  <MenuItem key="CleanLocation" primaryText="Clean Location" />,
                  <MenuItem key="CleanYear" primaryText="Clean Year" />,
                  <MenuItem key="CleanDimensions" primaryText="Clean Dimensions" />,
                  <MenuItem key="CleanPrices" primaryText="Clean Prices" />,
                  <MenuItem key="CleanIllegalPics" primaryText="Clean Illegal Pics" />,
                  <MenuItem key="CleanImagesFiles" primaryText="Clean Images & Files" />,
                  <MenuItem key="CleanCustomerTypes" primaryText="Clean Customer Types" />,
                  <MenuItem key="CleanCategories" primaryText="Clean Categories" />,
                  <MenuItem key="CleanCities" primaryText="Clean Cities" />,
                  <MenuItem key="DefineQualitiesList" primaryText="Define Qualities List" />,
                  <MenuItem key="Resubscribe" primaryText="Resubscribe" />,
                  <MenuItem key="RemoveMeUnsubscribe" primaryText="Remove Me (Unsubscribe)" />
                ]}
              />
            ]}
          />
          <Divider />
          <MenuItem
            containerElement={<Link to={LOGIN_PATH} />}
            primaryText="Sign Out"
            leftIcon={<i className="material-icons">power_settings_new</i>}
            onClick={this.props.logout}
          />
        </IconMenu>
      </div>
    );
  }
}

AvatarDropdown.propTypes = propTypes;

const mapStateToProps = state => ({
  logo: state.customer.logo3
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction())
});

export { AvatarDropdown as AvatarDropdownTest };

export default connect(mapStateToProps, mapDispatchToProps)(AvatarDropdown);
