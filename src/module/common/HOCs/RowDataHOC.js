import { connect } from 'react-redux';

const rowDataSelector = (state, { griddleKey }) => {
  return state
    .get('data')
    .find(rowMap => rowMap.get('griddleKey') === griddleKey)
    .toJSON();
};

const mapStateToProps = (state, props) => {
  return {
    rowData: rowDataSelector(state, props)
  };
};

function RowData(WrappedComponent) {
  return connect(mapStateToProps)(WrappedComponent);
}

export default RowData;
