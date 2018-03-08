import React from 'react';

import HeaderOrganisationName from './HeaderOrganisationName';
import ActionsButton from '../../menu/icons/components/ActionsButton';
import AvatarDropdown from '../../menu/icons/components/AvatarDropdown';
import Logs from '../../logs/containers/Logs';

/**
 * @function Header
 * @returns {XML}
 */
function Header() {
  return (
    <header className="an-header">
      <div className="header-center">
        <HeaderOrganisationName />
      </div>
      <div className="header-right">
        <ActionsButton />
        <Logs />
        <AvatarDropdown />
      </div>
    </header>
  );
}

export default Header;
