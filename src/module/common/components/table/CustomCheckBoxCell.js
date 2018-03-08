import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../form/CheckBox';

const propTypes = {
  rowData: PropTypes.object.isRequired,
  appDispatch: PropTypes.func.isRequired,
  checkAction: PropTypes.func.isRequired,
  unCheckAction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

class CustomCheckBoxCell extends React.Component {
  onChange = e => {
    const { rowData, appDispatch, checkAction, unCheckAction, id } = this.props;
    if (rowData.checked) appDispatch(unCheckAction(rowData[id]));
    else appDispatch(checkAction(rowData[id]));
  };

  render() {
    const { rowData } = this.props;
    return (
      <div style={{ width: "20px" }}>
        <CheckBox iconStyle={rowData.checked ? { fill: '#E38925' } : null} input={{ value: rowData.checked, onChange: this.onChange }} label="" />
      </div>
    )
  }
}

CustomCheckBoxCell.propTypes = propTypes;

export default CustomCheckBoxCell;
