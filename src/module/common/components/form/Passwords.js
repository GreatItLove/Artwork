import React from 'react';

import PasswordField from './PasswordField';
import ConfirmPasswordField from './ConfirmPasswordField';

/**
 * @function Passwords
 * @returns {XML}
 */
function Passwords() {
  return (
    <div>
      <div className="col-sm-12">
        <div className="row align-items-center">
          <div className="col-md-4">
            <label>Password</label>
          </div>
          <div className="col-md-8">
            <PasswordField />
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="row align-items-center">
          <div className="col-md-4">
            <label>Confirm Password</label>
          </div>
          <div className="col-md-8">
            <ConfirmPasswordField />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passwords;
