import React from 'react';
import { translate } from 'react-i18next';
import Panel from '../common/components/Panel';
import ArtistsList from './ArtistsList';
import HeaderRightActionIcons from './containers/HeaderRightActionIcons'
import SystemMessage from '../notifications/system/components/SystemMessage';

/**
 * @function ArtistsLit
 * @returns {XML}
 */
function ArtistsLit({ t }) {
  return (
    <div>
      <SystemMessage />
      <Panel title={t('artists')} rightElement={<HeaderRightActionIcons />} headingStyle={{ borderBottom: "0px" }}>
        <ArtistsList />
      </Panel>
    </div>
  );
}

export default translate(['artists'])(ArtistsLit);
