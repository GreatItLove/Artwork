import React from 'react';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

import { WEBSITES_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired,
  styleChild: PropTypes.object.isRequired
};

/**
 * @function WebsiteItem
 * @param {Object} style
 * @param {Object} styleChild
 * @returns {XML}
 */
function WebsiteItem({ style, styleChild }) {
  return (
    <ListItem
      key={WEBSITES_PATH}
      primaryText="Website"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">web</i>}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key="ContentManagement"
          innerDivStyle={styleChild}
          primaryText="Content Management"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem key="About" innerDivStyle={styleChild} primaryText="About" />,
            <ListItem key="ArtistsMain" innerDivStyle={styleChild} primaryText="Artists Main" />,
            <ListItem key="ArtistsDetail" innerDivStyle={styleChild} primaryText="Artists Detail" />,
            <ListItem key="ArtistsInfo" innerDivStyle={styleChild} primaryText="Artists Info" />,
            <ListItem key="ArtworkDetail" innerDivStyle={styleChild} primaryText="Artwork Detail" />,
            <ListItem key="ArtworkShop" innerDivStyle={styleChild} primaryText="Artwork Shop" />,
            <ListItem key="ArtworkInquiry" innerDivStyle={styleChild} primaryText="Artwork Inquiry" />,
            <ListItem key="ContactUs" innerDivStyle={styleChild} primaryText="Contact Us" />,
            <ListItem key="CopyrightPrivacy" innerDivStyle={styleChild} primaryText="Copyright/Privacy" />,
            <ListItem key="Ecommerce" innerDivStyle={styleChild} primaryText="Ecommerce" />,
            <ListItem key="Events" innerDivStyle={styleChild} primaryText="Events" />,
            <ListItem key="Exhibits" innerDivStyle={styleChild} primaryText="Exhibits" />,
            <ListItem key="FAQPage" innerDivStyle={styleChild} primaryText="FAQ Page" />,
            <ListItem key="HomePage" innerDivStyle={styleChild} primaryText="Home Page" />,
            <ListItem key="MapPage" innerDivStyle={styleChild} primaryText="Map Page" />,
            <ListItem key="MyCollectionPage" innerDivStyle={styleChild} primaryText="My Collection Page" />,
            <ListItem key="NewsPage" innerDivStyle={styleChild} primaryText="News Page" />,
            <ListItem key="PrivateViewingPage" innerDivStyle={styleChild} primaryText="Private Viewing Page" />,
            <ListItem key="ResourcesPage" innerDivStyle={styleChild} primaryText="Resources Page" />,
            <ListItem key="SearchPage" innerDivStyle={styleChild} primaryText="Search Page" />,
            <ListItem key="ServicesPage" innerDivStyle={styleChild} primaryText="Services Page" />,
            <ListItem key="SlideShow" innerDivStyle={styleChild} primaryText="Slide Show" />,
            <ListItem key="Submissions Page" innerDivStyle={styleChild} primaryText="Submissions Page" />,
            <ListItem key="SubscribePage" innerDivStyle={styleChild} primaryText="Subscribe Page" />
          ]}
        />,
        <ListItem
          key="DesignCenter"
          innerDivStyle={styleChild}
          primaryText="Design Center"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem key="Overview" innerDivStyle={styleChild} primaryText="Overview" />,
            <ListItem key="NavigationLinks" innerDivStyle={styleChild} primaryText="Navigation Links" />,
            <ListItem key="StyleFilesCSS" innerDivStyle={styleChild} primaryText="Style Files (CSS)" />,
            <ListItem key="DesignBasics" innerDivStyle={styleChild} primaryText="Design Basics" />
          ]}
        />
      ]}
    />
  );
}

WebsiteItem.propTypes = propTypes;

export default WebsiteItem;
