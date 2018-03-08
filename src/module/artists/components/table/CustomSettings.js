import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import _map from 'lodash/map';

const propTypes = {
  appDispatch: PropTypes.func.isRequired,
  selectedCheckBox: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
};

/**
 * @function CustomSettings
 * @param {object} selectedCheckBox checkedbox list
 * @returns {XML}
 */
class CustomSettings extends React.Component {
  changeColumnValue = settings => {
    const { appDispatch, bulkEditRequest, selectedCheckBox, id } = this.props;
    appDispatch(
      bulkEditRequest({
        [id]: selectedCheckBox.toString(),
        [settings.key]: settings.value,
      }),
    );
  };

  render() {
    const { t, settingsData } = this.props;
    const isDisabled =
      this.props.selectedCheckBox.length === 0 || this.props.fetching;
    const buttonStyle = isDisabled
      ? { borderRadius: '5px' }
      : { backgroundColor: '#E38925', borderRadius: '5px' };

    return this.props.list.length > 0 ? (
      <div className="filter-settings">
        <span style={{ color: 'lightgrey' }}>{t('bulkedits.comment')}</span>
        <div>
          {_map(settingsData, (settings, key) => (
            <RaisedButton
              key={key}
              label={t(`bulkedits.${settings.name}`)}
              primary={true}
              onClick={this.changeColumnValue.bind(this, settings)}
              buttonStyle={buttonStyle}
              labelStyle={{ textTransform: 'none' }}
              style={{ width: '140px', margin: '10px' }}
              disabled={isDisabled}
            />
          ))}
        </div>
      </div>
    ) : null;
  }
}

CustomSettings.propTypes = propTypes;

export default CustomSettings;
