import React from 'react';

import DownloadIcon from './DownloadIcon';
import PrintIcon from './PrintIcon';
import AddIcon from './AddIcon';

/**
 * @function HeaderRightActionIcons
 * @returns {XML}
 */
function HeaderRightActionIcons({ openAddDialog, openDownloadDialog }) {
  return (
    <div>
      <DownloadIcon openDownloadDialog={openDownloadDialog} />
      <PrintIcon />
      <AddIcon openAddDialog={openAddDialog} />
    </div>
  );
}

export default HeaderRightActionIcons;
