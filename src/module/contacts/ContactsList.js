import React from 'react';

import Panel from '../common/components/Panel';
import Contacts from './containers/Contacts';
import HeaderRightActionIcons from './containers/HeaderRightActionIcons';
import Refresh from './containers/RefreshContacts';
import SystemMessage from '../notifications/system/components/SystemMessage';

function ContactsList() {
  return (
    <div>
      <p className="float-right d-block d-inline-block" />
      <SystemMessage />
      <Panel
        title="Contacts"
        refresh={<Refresh />}
        rightElement={<HeaderRightActionIcons />}
        headingStyle={{ borderBottom: '0px' }}>
        <Contacts />
      </Panel>
    </div>
  );
}

export default ContactsList;
