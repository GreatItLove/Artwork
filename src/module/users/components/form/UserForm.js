import React from 'react';
import { Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import SystemMessage from '../../../notifications/system/components/SystemMessage';
import Panel from '../../../common/components/Panel';
import InputField from '../../../common/components/form/InputField';
import SelectField from '../../../common/components/form/SelectField';
import RadioGroup from '../../../common/components/form/RadioGroup';
import Passwords from '../../../common/components/form/Passwords';
import CloseIcon from '../../../common/components/header/CloseIcon';
import LastLoginInfo from './LastLoginInfo';
import SubmitUserFormButton from '../../containers/SubmitUserFormButton';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};

const defaultProps = {
  initialValues: {},
};

/**
 * @function UserForm
 * @param {Function} handleSubmit
 * @param {Function} submitForm
 * @param {Object} initialValues
 * @returns {XML}
 */
function UserForm({ handleSubmit, submitForm, closeDialog, initialValues }) {
  const { userId: isFormTypeEdit } = initialValues;
  const actions = (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-md-7" />
        <div className="col-md-2 my-auto">
          <span className="users cancel-link" onClick={closeDialog}>
            CANCEL
          </span>
        </div>
        <div className="col-md-3">
          <SubmitUserFormButton
            onClick={handleSubmit(submitForm)}
            label="Submit" />
        </div>
      </div>
    </div>
  );
  return (
    <Panel
      actions={actions}
      title={isFormTypeEdit ? 'Edit User' : 'Add User'}
      rightElement={<CloseIcon closeDialog={closeDialog} />}
      panelHeadingClassName="users-from-panel-heading">
      <SystemMessage />
      <Scrollbars style={{ height: 325 }} >
        <form className="readmin-form users-form">
          <div className="col-sm-12">
            <div className="row  align-items-center">
              <div className="col-md-4">
                <label>Full name</label>
              </div>
              <div className="col-md-8">
                <Field
                  id="your-full-name"
                  name="fullName"
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-username"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row align-items-center">
              <div className="col-md-4">
                <label>Email/Login</label>
              </div>
              <div className="col-md-8">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-email"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row align-items-center">
              <div className="col-md-4">
                <label>User Level:</label>
              </div>
              <div className="col-md-8">
                <Field
                  id="userLevel"
                  name="userLevel"
                  type="text"
                  fullWidth={true}
                  component={SelectField}
                  autoComplete="new-user-level">
                  <MenuItem value="" primaryText="Select One" />
                  <MenuItem value={0} primaryText="0 (Lowest)" />
                  <MenuItem value={1} primaryText="1" />
                  <MenuItem value={2} primaryText="2" />
                  <MenuItem value={3} primaryText="3" />
                  <MenuItem value={4} primaryText="4 (Highest)" />
                </Field>
              </div>
            </div>
          </div>
          <div className="col-sm-12" style={{ top: '-10px' }}>
            <div className="row align-items-center">
              <div className="col-md-4">
                <label>User Type:</label>
              </div>
              <div className="col-md-8">
                <Field
                  id="userType"
                  name="userType"
                  type="text"
                  fullWidth={true}
                  component={SelectField}
                  autoComplete="new-user-type">
                  <MenuItem value="" primaryText="Select One" />
                  <MenuItem value="Guest" primaryText="Guest" />
                  <MenuItem value="Staff" primaryText="Staff" />
                  <MenuItem
                    value="QB_Administrator"
                    primaryText="Quickbooks_Administrator"
                  />
                </Field>
              </div>
            </div>
          </div>
          <div className="col-sm-12" style={{ top: '-5px' }}>
            <div className="row align-items-center">
              <div className="col-md-4">
                <label>Active:</label>
              </div>
              <div className="col-md-8">
                <Field
                  id="active"
                  name="active"
                  type="text"
                  fullWidth={true}
                  component={RadioGroup}
                  style={{ display: 'inline-flex' }}
                  autoComplete="new-active">
                  <RadioButton
                    iconStyle={{ fill: '#66a4c0' }}
                    value={true}
                    label="Yes"
                  />
                  <RadioButton
                    iconStyle={{ fill: '#66a4c0' }}
                    value={false}
                    label="No"
                  />
                </Field>
              </div>
            </div>
          </div>
          {isFormTypeEdit && <LastLoginInfo initialValues={initialValues} />}
          {!isFormTypeEdit && <Passwords />}
        </form>
      </Scrollbars>
    </Panel>
  );
}

UserForm.defaultProps = defaultProps;
UserForm.propTypes = propTypes;

export default UserForm;
