import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import IconAdd from './IconAdd';

class ActionsButton extends Component {
  state = {
    openMenu: false
  };

  handleOnRequestChange = value => {
    this.setState({
      openMenu: value
    });
  };

  render() {
    const style = {
      zIndex: '1500'
    };

    return (
      <div>
        <IconMenu
          style={style}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          iconButtonElement={
            <IconButton>
              <IconAdd />
            </IconButton>
          }
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem primaryText="Create Invoice" leftIcon={<i className="material-icons">payment</i>} />
          <MenuItem primaryText="Add Artwork" leftIcon={<i className="material-icons">color_lens</i>} />
          <MenuItem primaryText="Add Artist" leftIcon={<i className="material-icons">person_add</i>} />
          <MenuItem primaryText="Add Contact" leftIcon={<i className="material-icons">note_add</i>} />
        </IconMenu>
      </div>
    );
  }
}
export default ActionsButton;
