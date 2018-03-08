import React from 'react';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PropTypes from 'prop-types';

import logo from '../../../img/logo-artwork-manager-white.png';
import { ADMIN_PANEL_BASE_PATH } from '../../../config/routesPatch';

const propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

/**
 * @function HeaderLogoWithMenu
 * @param {Function} toggleMenu
 * @returns {XML}
 */
function HeaderLogoWithMenu({ toggleMenu }) {
  return (
    <div className="an-header">
      <div className="header-left">
        <Link to={ADMIN_PANEL_BASE_PATH} className="brand">
          <img src={logo} alt="Managed ArtWork logo" />
        </Link>
        <FloatingActionButton mini className="icon-buttons" onClick={toggleMenu}>
          <i className="material-icons icon-brand-black">format_indent_decrease</i>
        </FloatingActionButton>
      </div>
    </div>
  );
}
HeaderLogoWithMenu.propTypes = propTypes;

export { HeaderLogoWithMenu as HeaderLogoWithMenuTest };

export default HeaderLogoWithMenu;
