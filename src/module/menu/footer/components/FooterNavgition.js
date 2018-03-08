import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

/**
 * @function FooterNavgition
 * @returns {XML}
 */
function FooterNavgition() {
  return (
    <BottomNavigation style={{ backgroundColor: 'none' }}>
      <BottomNavigationItem label="Support" icon={<FontIcon className="material-icons">phone</FontIcon>} />
      <BottomNavigationItem label="Tutorials" icon={<FontIcon className="material-icons">library_books</FontIcon>} />
      <BottomNavigationItem
        label="Terms of Service"
        icon={<FontIcon className="material-icons">view_headline</FontIcon>}
      />
    </BottomNavigation>
  );
}

export default FooterNavgition;
