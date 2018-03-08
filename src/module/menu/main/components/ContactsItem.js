import React from 'react';
import { ListItem } from 'material-ui/List';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CONTACTS_PATH } from '../../../../config/routesPatch';

const propTypes = {
  style: PropTypes.object.isRequired
};

/**
 * @function ContactsItem
 * @param {Object} style
 * @returns {XML}
 */
function ContactsItem({ style }) {
  return (
    <ListItem
      key={CONTACTS_PATH}
      primaryText="Contacts"
      innerDivStyle={style}
      leftIcon={<i className="material-icons">contact_mail</i>}
      containerElement={<NavLink to={CONTACTS_PATH} exact />}
    />
  );
}

ContactsItem.propTypes = propTypes;

export default ContactsItem;
