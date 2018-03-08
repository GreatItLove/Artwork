import React from 'react';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

import { MEDIA_LIBRARY } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired,
  styleChild: PropTypes.object.isRequired
};

/**
 * @function MediaLibraryItem
 * @param {Object} style
 * @param {Object} styleChild
 * @returns {XML}
 */
function MediaLibraryItem({ style, styleChild }) {
  return (
    <ListItem
      key={MEDIA_LIBRARY}
      primaryText="Media Library"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">video_library</i>}
      primaryTogglesNestedList={true}
      nestedItems={[
        <ListItem key="FileUploader" innerDivStyle={styleChild} primaryText="File Uploader" />,
        <ListItem key="View" innerDivStyle={styleChild} primaryText="View" />
      ]}
    />
  );
}

MediaLibraryItem.propTypes = propTypes;

export default MediaLibraryItem;
