import React from 'react';

import ActiveToggle from './ActiveToggle';
import TrashIcon from './TrashIcon';

/**
 * @function HeaderEditsRightActionIcon
 * @returns {XML}
 */
function HeaderEditsRightActionIcon() {
  return (
    <div style={{ width: "150px", display: "flex" }}>
      <div style={{ width: "70%", marginTop: "13px", height: "0px" }}>
        <ActiveToggle />
      </div>
      <div style={{ width: "30%" }}>
        <TrashIcon />
      </div>
    </div>
  );
}

export default HeaderEditsRightActionIcon;
