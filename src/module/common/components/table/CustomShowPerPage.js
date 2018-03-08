import React from 'react';
import { DropDownMenu, MenuItem } from 'material-ui';
import PropTypes from 'prop-types';
import _times from 'lodash/times';
import _map from 'lodash/map';

const propTypes = {
  appDispatch: PropTypes.func.isRequired,
  searchFilter: PropTypes.object.isRequired,
};

class CustomShowPerPage extends React.Component {
  onRecordChange = (e, index, value) => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      this.props.fetchRequest({
        limit: value,
        offset: (pagination.currentPage - 1) * value,
        ...this.props.searchFilter,
      }),
    );
  };
  onPageChange = (e, index, value) => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      this.props.fetchRequest({
        limit: pagination.recordsPerPage,
        offset: (value - 1) * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };
  getPaginationInfo = () => {
    const { pagination } = this.props;
    let startRecord = (pagination.currentPage - 1) * pagination.recordsPerPage + 1;
    let endRecord = pagination.recordsPerPage * pagination.currentPage;
    let totalRecord = pagination.totalRecordCount;
    if (pagination.currentPage !== pagination.totalPages && totalRecord)
      return <span>{`${startRecord} - ${endRecord} of ${totalRecord}`}</span>;
    else if (totalRecord) {
      return <span>{`${startRecord} - ${totalRecord} of ${totalRecord}`}</span>
    } else return <span>0 Record</span>;
  };
  render() {
    const { pagination } = this.props;
    return (
      <div className="col-sm-11 show-per-page">
        <div className="row align-items-center">
          <div className="col-md-4 text-left">
            <span className="page">Records per page</span>
            <DropDownMenu
              value={pagination.recordsPerPage}
              onChange={this.onRecordChange}
              underlineStyle={{ width: '30px', margin: '6px 24px' }}
              labelStyle={{ fontSize: '1rem', color: '#979797' }}>
              <MenuItem value="25" primaryText="25" />
              <MenuItem value="50" primaryText="50" />
              <MenuItem value="100" primaryText="100" />
              <MenuItem value="250" primaryText="250" />
            </DropDownMenu>
          </div>
          <div className="col-md-4 text-center">{this.getPaginationInfo()}</div>
          <div className="col-md-4 text-right">
            <span className="page">Page</span>
            <DropDownMenu
              value={pagination.currentPage}
              onChange={this.onPageChange}
              maxHeight={250}
              underlineStyle={{ width: '30px', margin: '6px 24px' }}
              labelStyle={{ fontSize: '1rem', color: '#979797' }}>
              {_map(_times(pagination.totalPages), value => (
                <MenuItem key={value} value={value + 1} primaryText={value + 1} />
              ))}
            </DropDownMenu>
          </div>
        </div>
      </div>
    );
  }
}

CustomShowPerPage.propTypes = propTypes;

export default CustomShowPerPage;
