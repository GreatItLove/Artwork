import React, { Component } from 'react';
import { Field } from 'redux-form';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

import InputField from '../../common/components/form/InputField';
import CheckBox from '../../common/components/form/CheckBox';

const propTypes = {
  t: PropTypes.func.isRequired,
  resetPasswords: PropTypes.func.isRequired
};

/**
 * @class ChangePasswords
 * @extends React.Component
 * @description Render component
 */
class ChangePasswords extends Component {
  state = {
    checked: false
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ checked: false })
    }
  }
  handleCheckBox = () => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
    this.props.resetPasswords(['oldpassword', 'password', 'confirmPassword']);
  };

  renderPasswordFields() {
    const { checked: isChecked } = this.state;
    const { t } = this.props;
    return (
      <CSSTransition in={isChecked} timeout={300} classNames="fade" mountOnEnter unmountOnExit appear>
        <div key="passwordFields">
          <div className="col-sm-12">
            <div className="row align-items-center">
              <div className="col-md-4">
                <label>{t('editAccount.oldPasswordLabel')}</label>
              </div>
              <div className="col-md-8">
                <Field
                  id="oldPassword"
                  name="oldpassword"
                  type="password"
                  inputStyle={{ color: '#609ab4' }}
                  fullWidth={true}
                  component={InputField}
                  autoComplete="old-password"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row align-items-center">
              <div className="col-md-4">
                <label>{t('editAccount.newPasswordLabel')}</label>
              </div>
              <div className="col-md-8">
                <Field
                  id="newPassword"
                  name="password"
                  type="password"
                  inputStyle={{ color: '#609ab4' }}
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-password"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row align-items-center">
              <div className="col-md-4">
                <label>{t('editAccount.confirmPasswordLabel')}</label>
              </div>
              <div className="col-md-8">
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  inputStyle={{ color: '#609ab4' }}
                  fullWidth={true}
                  component={InputField}
                  autoComplete="confirm-password"
                />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { t } = this.props;
    return (
      <div className="pt-2">
        <div className="col-sm-12">
          <div className="row align-items-center">
            <div className="col-md-4">
              <label>{t('editAccount.changePasswordLabel')}</label>
            </div>
            <div className="col-md-8">
              <Field name="changePassword" onChange={this.handleCheckBox} component={CheckBox} label="" />
            </div>
          </div>
        </div>

        {this.renderPasswordFields()}
      </div>
    );
  }
}

ChangePasswords.propTypes = propTypes;

export default ChangePasswords;
