import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import HeaderLogoWithMenu from './HeaderLogoWithMenu';

import MenuList from '../../menu/main/components/MenuList';
import AdminRoutes from '../../routes/components/AdminRoutes';
import Footer from './Footer';

class SidebarMenuRouters extends Component {
  constructor() {
    super();
    this.state = { menuOpen: true };
    this.menuCollapseWithResize = this.menuCollapseWithResize.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // Sidebar collapse when tablet
  componentDidMount() {
    window.addEventListener('resize', this.menuCollapseWithResize);

    if (window.innerWidth < 991) {
      this.setState({ menuOpen: false });
    }
  }

  // Sidebar collapse when tablet
  componentWillUnmount() {
    window.removeEventListener('resize', this.menuCollapseWithResize);
  }

  // menu collapse when on mobile function
  menuCollapseWithResize() {
    if (window.innerWidth < 991) {
      this.setState({ menuOpen: false });
    }
    if (window.innerWidth > 991) {
      this.setState({ menuOpen: true });
    }
  }

  // Sidebar toggle
  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    // Page content class change based on menu toggle
    const pageContent = classNames({
      'readmin-page-content': true,
      'menu-open': this.state.menuOpen
    });

    // Sidebar class based on bg color
    const sidebarClass = classNames({
      'menu-drawer': true,
      'has-bg': true
    });

    return (
      <div>
        <div className="readmin-sidebar">
          <HeaderLogoWithMenu toggleMenu={this.toggleMenu} />
          <Drawer
            open={this.state.menuOpen}
            className={sidebarClass}
            containerClassName="sidebar-initial-color"
            containerStyle={{ backgroundColor: 'none' }}
          >
            <Scrollbars>
              <MenuList />
            </Scrollbars>
          </Drawer>
        </div>
        <div className={pageContent}>
          <AdminRoutes />
          <Footer />
        </div>
      </div>
    );
  }
}
export default SidebarMenuRouters;
