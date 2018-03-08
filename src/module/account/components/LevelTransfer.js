import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field } from 'redux-form';
import { RaisedButton, MenuItem } from 'material-ui';
import _map from 'lodash/map';

import SelectField from '../../common/components/form/SelectField';

const propTypes = {
  t: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  account: PropTypes.object.isRequired,
  resetTransferEmail: PropTypes.func.isRequired
};

/**
 * @class LevelTransfer
 * @extends React.Component
 * @description Render component
 */
class LevelTransfer extends Component {
  state = {
    isOpen: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ isOpen: false })
    }
  }
  renderTransferFields() {
    const { isOpen } = this.state;
    const { list, account } = this.props;
    const levelClass = classNames({
      'users levelTransfer': true,
      'filter-open users levelBorder': isOpen,
      'filter-hidden': !isOpen,
    });
    return (
      <div
        className={levelClass}
        style={{ height: isOpen ? 250 : 0 }}>
        <div className="col-sm-12">
          <div className="row align-items-center">
            <div className="col-md-4" />
            <div className="col-md-8">
              <div className="py-3">
                Every Artwok Manager has one Site Administrator user with the
                highest access level. Right now, you are the S.A. This may be
                transferred away to another level 4 user, but{' '}
                <b>this cannot be undone.</b>
              </div>
              <div>To give full control of your Artwork Manager to a different user choose below:</div>
              <Field id="transferEmail" name="transferEmail" fullWidth hintText="Select One" component={SelectField}>
                {_map(
                  list,
                  item =>
                    item.userLevel === 4 && account.email !== item.email ? (
                      <MenuItem key={item.userId} value={item.userId} primaryText={item.email} />
                    ) : null
                )}
              </Field>
            </div>
          </div>
        </div>
      </div>
    );
  }
  openTransferBlock = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.resetTransferEmail('transferEmail');
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const { t, account } = this.props;
    const { isOpen } = this.state;
    return account.userType === 'SA' && account.userLevel === 4 ? (
      <div className="pt-2">
        <div className="col-sm-12 py-3">
          <div className="row align-items-center">
            <div className="col-md-4">
              <label>{t('editAccount.transfer')}</label>
            </div>
            <div className="col-md-8">
              <RaisedButton
                backgroundColor={isOpen ? '#8f9082' : '#dddddd'}
                labelStyle={{ color: isOpen ? '#ffffff' : '#000000', textTransform: 'none' }}
                onClick={this.openTransferBlock}
                label={t('editAccount.siteAdmin')}
              />
            </div>
          </div>
        </div>
        {this.renderTransferFields()}
      </div>
    ) : null;
  }
}

LevelTransfer.propTypes = propTypes;

export default LevelTransfer;
