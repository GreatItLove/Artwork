import React, { Component } from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import PropTypes from 'prop-types';
import _isEqual from 'lodash/isEqual';
import { RefreshIndicator } from 'material-ui';

import CustomNextButton from '../../../common/components/table/CustomNextButton';
import CustomActiveCell from '../../../common/components/table/CustomActiveCell';
import CustomPreviousButton from '../../../common/components/table/CustomPreviousButton';
import CustomShowPerPage from '../../../common/components/table/CustomShowPerPage';
import CustomFilter from '../../../common/components/filter/CustomFilter';
import CustomSettings from './CustomSettings';
import CustomCheckBoxCell from '../../../common/components/table/CustomCheckBoxCell';
import BulkUpdateContactDialog from '../../containers/BulkUpdateContactDialog';
import DownloadContactDialog from '../../containers/DownloadContactDialog';
import AddContactDialog from '../../containers/AddContactDialog';

import RowData from '../../../common/HOCs/RowDataHOC';
import {
  fetchContactRequest,
  updateSearchFilter,
  switchContactsFilter,
  checkContacts,
  uncheckContacts,
  openBulkUpdateContactDialog,
  bulkContactEditRequest,
  fetchLookupRequest,
} from '../../contactActions';

const tableStyleConfig = {
  classNames: {
    Table: 'table table-hover',
  },
};

const propTypes = {
  list: PropTypes.array.isRequired,
  appDispatch: PropTypes.func.isRequired,
};

function FullNameActiveCell({ value, griddleKey, rowData }) {
  return (
    <div>
      {rowData.firstName} {rowData.lastName}
    </div>
  );
}

function customDateFormat({ value, griddleKey, rowData }) {
  if (!rowData.importDate) {
    return null;
  }
  let date = new Intl.DateTimeFormat('en-Us').format(new Date(rowData.importDate * 1000));
  return <div>{date}</div>;
}

const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />
    <Table />
    <SettingsWrapper />
    <Pagination />
  </div>
);

class ContactGriddle extends Component {
  constructor(props) {
    super(props);
    let filterData = {
      name: 'Contacts',
      radio: [
        {
          name: 'contactType',
          fields: [
            { name: 'Consignor', value: 'Consignor' },
            { name: 'Artist', value: 'Artist' },
            { name: 'Consignee', value: 'Consignee' },
          ],
        },
        {
          name: 'isCompleteMailList',
          fields: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
        },
      ],
      autoComplete: [
        {
          name: 'category',
          dataSource: this.props.category,
        },
      ],
    };
    this.state = {
      filterData: filterData,
    };
    const { appDispatch, list, category } = this.props;
    if (list.length === 0)
      appDispatch(fetchContactRequest({ limit: 25, offset: 0 }));
    if (category.length === 0) appDispatch(fetchLookupRequest('category'));
  }
  componentWillReceiveProps(nextProps) {
    if (!_isEqual(nextProps.category, this.props.category)) {
      let data = this.state.filterData;
      data.autoComplete[0].dataSource = nextProps.category;
      this.setState({
        filterData: data,
      });
    }
  }
  _onFilter = filterText => {
    const { appDispatch, pagination } = this.props;

    appDispatch(updateSearchFilter(filterText));
    appDispatch(
      fetchContactRequest({ limit: pagination.recordsPerPage, ...filterText }),
    );
  };
  _onNext = () => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchContactRequest({
        limit: pagination.recordsPerPage,
        offset: pagination.currentPage * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };

  _onPrevious = () => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchContactRequest({
        limit: pagination.recordsPerPage,
        offset: (pagination.currentPage - 2) * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };

  _onGetPage = pageNumber => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchContactRequest({
        limit: pagination.recordsPerPage,
        offset: (pageNumber - 1) * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };
  render() {
    const {
      t,
      list,
      pagination,
      appDispatch,
      category,
      selectedCheckBox,
      specialInterest,
      howFound,
      customerTypes,
    } = this.props;
    let self = this;
    for (var i = 0; i < list.length; i++) {
      if (selectedCheckBox.indexOf(list[i].customerId) >= 0) {
        list[i].checked = true;
      } else list[i].checked = false;
    }
    const settingsData = [
      { name: 'valid', key: 'valid', value: true },
      { name: 'invalid', key: 'valid', value: false },
      { name: 'mailList', key: 'mailList', value: true },
      { name: 'nonMailList', key: 'mailList', value: false },
      { name: 'emailList', key: 'emailList', value: false },
      { name: 'delete', key: 'delete', value: true },
      { name: 'customerType', key: 'customerTypes', value: customerTypes },
      { name: 'category', key: 'category', value: category },
      { name: 'howFound', key: 'howFound', value: howFound },
      { name: 'specialInterest', key: 'specialInterest', value: specialInterest },
    ];
    const extraData = {
      appDispatch: appDispatch,
      checkAction: checkContacts,
      unCheckAction: uncheckContacts,
      id: 'customerId',
    };
    return (
      <div>
        <Griddle
          data={list}
          styleConfig={tableStyleConfig}
          pageProperties={{
            currentPage: pagination.currentPage,
            pageSize: pagination.recordsPerPage,
            recordCount: pagination.totalRecordCount,
          }}
          events={{
            onFilter: this._onFilter,
            onNext: this._onNext,
            onPrevious: this._onPrevious,
            onGetPage: this._onGetPage,
          }}
          components={{
            SettingsWrapper: () => {
              return (
                <CustomSettings
                  t={t}
                  id="customerIds"
                  appDispatch={self.props.appDispatch}
                  selectedCheckBox={self.props.selectedCheckBox}
                  bulkEditRequest={bulkContactEditRequest}
                  list={self.props.list}
                  settingsData={settingsData}
                  fetching={self.props.fetching}
                  openDialog={openBulkUpdateContactDialog}
                  fetchLookups={fetchLookupRequest}
                />
              );
            },
            Filter: filter => {
              return (
                <CustomFilter
                  t={t}
                  showingFilter={self.props.showingFilter}
                  searchFilter={self.props.searchFilter}
                  recordCount={self.props.pagination.totalRecordCount}
                  appDispatch={appDispatch}
                  switchFilter={switchContactsFilter}
                  filterData={self.state.filterData}
                  setFilter={filter.setFilter}
                  className={filter.className}
                  style={filter.style}
                />
              );
            },
            PageDropdown: () => null,
            NextButton: CustomNextButton,
            PreviousButton: CustomPreviousButton,
            Layout: NewLayout,
            Table: ({ className, style, visibleRows, TableHeading, TableBody, NoResults }) => {
              return (this.props.fetching ?
                <div className={className} style={{ position: 'absolute', bottom: '120px', left: '48%', ...style }}>
                  <RefreshIndicator left={0} top={0} status="loading" />
                </div>
                :
                visibleRows ?
                  <table className={className} style={style}>
                    <TableHeading />
                    <TableBody />
                  </table>
                  :
                  <NoResults />
              )
            }
          }}>
          <RowDefinition>
            <ColumnDefinition
              id="check"
              title=" "
              customComponent={RowData(CustomCheckBoxCell)}
              extraData={extraData}
            />
            <ColumnDefinition
              id="firstname"
              title={t('name')}
              customComponent={RowData(FullNameActiveCell)}
            />
            <ColumnDefinition id="email" title={t('email')} />
            <ColumnDefinition id="contactPhone" title={t('phone')} />
            <ColumnDefinition id="address" title={t('address')} />
            <ColumnDefinition
              id="emailList"
              title={t('bulkEmail')}
              customComponent={CustomActiveCell}
            />
            <ColumnDefinition id="contactType" title={t('contactType')} />
            <ColumnDefinition id="grossSpent" title={t('spent')} />
            <ColumnDefinition
              id="qb"
              title={t('qb')}
              customComponent={CustomActiveCell}
            />
            <ColumnDefinition id="importDate" title={t('imported')} customComponent={RowData(customDateFormat)} />
          </RowDefinition>
        </Griddle>
        <CustomShowPerPage fetchRequest={fetchContactRequest} {...this.props} />
        <BulkUpdateContactDialog />
        <DownloadContactDialog />
        <AddContactDialog />
      </div>
    );
  }
}

ContactGriddle.propTypes = propTypes;

export default ContactGriddle;
