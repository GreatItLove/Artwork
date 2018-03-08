import React from 'react';

import Panel from '../common/components/Panel';
import Invoice from './containers/Invoice';
import HeaderRightActionIcons from './containers/HeaderRightActionIcons';
import Refresh from './containers/RefreshInvoices';
import SystemMessage from '../notifications/system/components/SystemMessage';

function InvoiceList() {
  return (
    <div>
      <p className="float-right d-block d-inline-block" />
      <SystemMessage />
      <Panel
        title="Invoices"
        rightElement={<HeaderRightActionIcons />}
        refresh={<Refresh />}
        headingStyle={{ borderBottom: '0px' }}>
        <Invoice />
      </Panel>
    </div>
  );
}

export default InvoiceList;