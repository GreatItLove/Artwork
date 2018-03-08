import React from 'react';

import HeaderRightActionIcons from '../../containers/HeaderRightActionIcons';
import Panel from '../../../common/components/Panel';
import SystemMessageOnUserList from '../../containers/SystemMessageOnUserList';

import UsersList from '../../containers/UsersList';
import Refresh from '../../containers/RefreshUsers';

/**
 * @function UsersTable
 * @returns {XML}
 */
function UsersTable() {
  return (
    <div>
      <SystemMessageOnUserList />
      <Panel
        title="Users"
        refresh={<Refresh />}
        rightElement={<HeaderRightActionIcons />}>
        <UsersList />
      </Panel>
    </div>
  );
}

export default UsersTable;
