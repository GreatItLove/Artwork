import React from 'react';
import { ListItem } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { REPORTS_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired,
  styleChild: PropTypes.object.isRequired
};

/**
 * @function ReportsItem
 * @param {Object} style
 * @param {Object} styleChild
 * @returns {XML}
 */
function ReportsItem({ style, styleChild }) {
  return (
    <ListItem
      key={REPORTS_PATH}
      primaryText="Reports"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">insert_chart</i>}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem
          key="DataLibrary"
          innerDivStyle={styleChild}
          primaryText="Data Library"
          containerElement={<NavLink to={REPORTS_PATH} exact />}
        />,
        <ListItem key="QueryBuilder" innerDivStyle={styleChild} primaryText="Query Builder" />,
        <ListItem key="Exports" innerDivStyle={styleChild} primaryText="Exports" />,
        <ListItem
          key="Artists"
          innerDivStyle={styleChild}
          primaryText="Artists"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem key="ArtistsInfo" innerDivStyle={styleChild} primaryText="Artists Info" />,
            <ListItem key="Exports" innerDivStyle={styleChild} primaryText="Exports" />,
            <ListItem key="ArtistsSEO" innerDivStyle={styleChild} primaryText="Artists SEO" />
          ]}
        />,
        <ListItem
          key="Artwork"
          innerDivStyle={styleChild}
          primaryText="Artwork"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem key="Insurance" innerDivStyle={styleChild} primaryText="Insurance" />,
            <ListItem key="COA" innerDivStyle={styleChild} primaryText="COA" />,
            <ListItem key="ConsignedOut" innerDivStyle={styleChild} primaryText="Consigned Out" />,
            <ListItem key="ArtworkDescriptions" innerDivStyle={styleChild} primaryText="Artwork Descriptions" />,
            <ListItem key="ArtworkImageNames" innerDivStyle={styleChild} primaryText="Artwork Image Names" />,
            <ListItem key="PrintLabelsLists" innerDivStyle={styleChild} primaryText="Print Labels & Lists" />
          ]}
        />,
        <ListItem
          key="Contacts"
          innerDivStyle={styleChild}
          primaryText="Contacts"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem key="AllContacts" innerDivStyle={styleChild} primaryText="All Contacts" />,
            <ListItem key="ContactMailingList" innerDivStyle={styleChild} primaryText="Contact Mailing List" />,
            <ListItem key="EmailList" innerDivStyle={styleChild} primaryText="Email List" />,
            <ListItem key="MarketingInfo" innerDivStyle={styleChild} primaryText="Marketing Info" />,
            <ListItem key="AllBuyers" innerDivStyle={styleChild} primaryText="All Buyers" />,
            <ListItem key="GrossSpent" innerDivStyle={styleChild} primaryText="Gross Spent" />
          ]}
        />,
        <ListItem
          key="Invoices"
          innerDivStyle={styleChild}
          primaryText="Invoices"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem key="MostRecentInvoices" innerDivStyle={styleChild} primaryText="Most Recent Invoices" />,
            <ListItem
              key="ItemsLocationsSalespersons"
              innerDivStyle={styleChild}
              primaryText="Items-Locations/Salespersons"
            />,
            <ListItem key="ItemsArtistConsignors" innerDivStyle={styleChild} primaryText="Items-Artist/Consignors" />,
            <ListItem key="CustomersCountry" innerDivStyle={styleChild} primaryText="Customers - Country" />,
            <ListItem key="AllInvoices" innerDivStyle={styleChild} primaryText="All Invoices" />
          ]}
        />,
        <ListItem
          key="Consignments"
          innerDivStyle={styleChild}
          primaryText="Consignments"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem key="ConsignorContactInfo" innerDivStyle={styleChild} primaryText="Consignor Contact Info" />,
            <ListItem key="ExportConsignorsXLS" innerDivStyle={styleChild} primaryText="Export Consignors (XLS)" />,
            <ListItem key="ExportCommissionsXLS" innerDivStyle={styleChild} primaryText="Export Commissions (XLS)" />
          ]}
        />
      ]}
    />
  );
}

ReportsItem.propTypes = propTypes;

export default ReportsItem;
