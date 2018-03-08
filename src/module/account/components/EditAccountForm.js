import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import SystemMessage from '../../notifications/system/components/SystemMessage';
import Panel from '../../common/components/Panel';
import InputField from '../../common/components/form/InputField';
import ChangePasswords from './ChangePasswords';
import SubmitButton from '../containers/SubmitEditAccountButton';
import LevelTransfer from './LevelTransfer';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  addSysMessage: PropTypes.func.isRequired,
  resetPasswords: PropTypes.func.isRequired,
  resetTransferEmail: PropTypes.func.isRequired,
  transferStatus: PropTypes.func.isRequired,
  fetchAccountRrequest: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

/**
 * @class EditAccountForm
 * @extends React.Component
 * @description Render component
 */
class EditAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  componentWillMount() {
    this.props.fetchUsersRequest();
    this.props.fetchAccountRrequest();
  }
  handleFormSubmit = data => {
    const { t } = this.props;
    const fields = Object.keys(data);
    const { initialValues } = this.props;
    let dataForUpdate = fields.reduce((forUpdate, field) => {
      if (initialValues[field] && data[field] !== initialValues[field]) {
        forUpdate[field] = data[field];
      }
      return forUpdate;
    }, {});

    if (data.changePassword) {
      const { oldpassword, password } = data;
      dataForUpdate = { ...dataForUpdate, ...{ oldpassword, password } };
    }
    if (data.transferEmail) {
      this.props.transferStatus({ userId: data.transferEmail });
    }
    const isEmpty = Object.keys(dataForUpdate).length === 0;
    if (isEmpty && !data.transferEmail) {
      this.props.addSysMessage(t('editAccount.nothingForUpdateMessage'));
    } else if (!isEmpty) {
      const { userId } = data;
      this.props.submitForm({ ...dataForUpdate, ...{ userId } });
    }
  };
  resetForm = () => {
    this.props.reset();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const {
      t,
      list,
      account,
      handleSubmit,
      resetPasswords,
      resetTransferEmail,
      muiTheme,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="row" style={{ color: '#164173' }}>
        <div className="col-md-2" />
        <div className="col-md-8">
          <SystemMessage />
          <Panel title={t('editAccount.title')}>
            <form onSubmit={handleSubmit(this.handleFormSubmit)} className="readmin-form">
              <div className="col-sm-12">
                <div className="row  align-items-center">
                  <div className="col-md-4">
                    <label>{t('editAccount.fullNameLabel')}</label>
                  </div>
                  <div className="col-md-8">
                    <Field
                      id="your-full-name"
                      name="fullName"
                      fullWidth={true}
                      inputStyle={{ color: '#609ab4' }}
                      component={InputField}
                      autoComplete="new-username"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <label>{t('editAccount.loginLabel')}</label>
                  </div>
                  <div className="col-md-8">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      fullWidth={true}
                      inputStyle={{ color: '#609ab4' }}
                      component={InputField}
                      autoComplete="new-email"
                    />
                  </div>
                </div>
              </div>
              <ChangePasswords open={isOpen} t={t} resetPasswords={resetPasswords} />
              <LevelTransfer open={isOpen} t={t} list={list} account={account} resetTransferEmail={resetTransferEmail} />
              <div className="col-sm-12 pt-2">
                <div className="row">
                  <div className="col-md-7" />
                  <div className="col-md-2 my-auto">
                    <span className="users cancel-link" onClick={this.resetForm}>CANCEL</span>
                  </div>
                  <div className="col-md-3">
                    <SubmitButton
                      primary={false}
                      backgroundColor={muiTheme.palette.colorBrandOrange}
                      labelColor="#ffffff"
                      style={{ boxShadow: 'none' }}
                      label={t('editAccount.submitButtonLabel')}
                    />
                  </div>
                </div>
              </div>
            </form>
          </Panel>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

EditAccountForm.propTypes = propTypes;

export default EditAccountForm;
