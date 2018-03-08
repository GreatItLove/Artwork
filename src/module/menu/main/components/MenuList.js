import React from 'react';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import DashboardItem from './DashboardItem';
import ArtistsItem from './ArtistsItem';
import ArtworkItems from './ArtworkItems';
import ConsignmentsItem from './ConsignmentsItem';
import ContactsItem from './ContactsItem';
import InvoicesItem from './InvoicesItem';
import ReportsItem from './ReportsItem';
import MarketingItem from './MarketingItem';
import WebsiteItem from './WebsiteItem';
import MediaLibraryItem from './MediaLibraryItem';

/**
 * @function MenuList
 * @returns {XML}
 */
function MenuList() {
  // Parent list style
  const style = {
    padding: '16px 16px 16px 55px',
    fontSize: '14px'
  };

  const styleChild = {
    padding: '12px 13px 12px 40px',
    fontSize: '14px'
  };

  return (
    <List className="nav-menu">
      <DashboardItem style={style} />
      <div className="menudivider">
        <Divider />
      </div>
      <ArtistsItem style={style} />
      <ArtworkItems style={style} />
      <ConsignmentsItem style={style} styleChild={styleChild} />
      <ContactsItem style={style} />
      <InvoicesItem style={style} />
      <ReportsItem style={style} styleChild={styleChild} />
      <MarketingItem style={style} styleChild={styleChild} />
      <WebsiteItem style={style} styleChild={styleChild} />
      <MediaLibraryItem style={style} styleChild={styleChild} />
      <div className="menudivider" />
      <div className="menudivider" />
    </List>
  );
}

export default MenuList;
