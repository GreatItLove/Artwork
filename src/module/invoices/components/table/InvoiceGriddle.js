import React, { Component } from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import PropTypes from 'prop-types';
import { RefreshIndicator } from 'material-ui';

import CustomNextButton from '../../../common/components/table/CustomNextButton';
import CustomPreviousButton from '../../../common/components/table/CustomPreviousButton';
import CustomShowPerPage from '../../../common/components/table/CustomShowPerPage';
import CustomFilter from '../../../common/components/filter/CustomFilter';
import CustomSettings from './CustomSettings';
import CustomCheckBoxCell from '../../../common/components/table/CustomCheckBoxCell';
import DownloadInvoiceDialog from '../../containers/DownloadInvoiceDialog';
import RowData from '../../../common/HOCs/RowDataHOC';
import {
  fetchInvoiceRequest,
  updateSearchFilter,
  switchInvoiceFilter,
  checkInvoice,
  uncheckInvoice,
  bulkInvoiceEditRequest,
} from '../../invoiceActions';

const tableStyleConfig = {
  classNames: {
    Table: 'table table-hover',
  },
};

const propTypes = {
  list: PropTypes.array.isRequired,
  appDispatch: PropTypes.func.isRequired,
};

const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />
    <Table />
    <SettingsWrapper />
    <Pagination />
  </div>
);

function CustomDateFormat({ value }) {
  if (!value) {
    return null;
  }
  let date = new Intl.DateTimeFormat('en-Us').format(new Date(value * 1000));
  return <div>{date}</div>;
}

class InvoiceGriddle extends Component {
  constructor(props) {
    super(props);
    const { appDispatch, list } = this.props;
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    if (list.length === 0)
      appDispatch(fetchInvoiceRequest({ limit: 25, offset: 0, fromDate: date, todate: new Date() }));
  }
  _onFilter = filterText => {
    const { appDispatch, pagination } = this.props;
    appDispatch(updateSearchFilter(filterText));
    appDispatch(
      fetchInvoiceRequest({
        limit: pagination.recordsPerPage,
        ...filterText,
      }),
    );
  };
  _onNext = () => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchInvoiceRequest({
        limit: pagination.recordsPerPage,
        offset: pagination.currentPage * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };

  _onPrevious = () => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchInvoiceRequest({
        limit: pagination.recordsPerPage,
        offset: (pagination.currentPage - 2) * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };

  _onGetPage = pageNumber => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchInvoiceRequest({
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
      selectedCheckBox,
    } = this.props;
    let self = this;
    for (var i = 0; i < list.length; i++) {
      if (selectedCheckBox.indexOf(list[i].orderID) >= 0) {
        list[i].checked = true;
      } else list[i].checked = false;
    }
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    let filterData = {
      name: 'Invoices',
      datePicker: [
        { name: 'fromDate', field: 'fromDate', defaultDate: date },
        { name: 'toDate', field: 'toDate', defaultDate: new Date() },
      ],
      radio: [
        {
          name: 'refinedDate',
          fields: [
            { name: 'DateOrdered', value: 'DateOrdered', displayName: 'Ordered' },
            { name: 'PaidFullDate', value: 'PaidFullDate', displayName: 'Paid in Full' },
          ],
        },
      ],
    };
    const settingsData = [
      { name: 'delete', key: 'delete', value: true },
    ];
    const extraData = {
      appDispatch: appDispatch,
      checkAction: checkInvoice,
      unCheckAction: uncheckInvoice,
      id: 'orderID',
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
                  id="invoiceIds"
                  appDispatch={self.props.appDispatch}
                  selectedCheckBox={self.props.selectedCheckBox}
                  bulkEditRequest={bulkInvoiceEditRequest}
                  list={self.props.list}
                  settingsData={settingsData}
                  fetching={self.props.fetching}
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
                  switchFilter={switchInvoiceFilter}
                  filterData={filterData}
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
              id="checked"
              title=" "
              customComponent={RowData(CustomCheckBoxCell)}
              extraData={extraData}
            />
            <ColumnDefinition
              id="orderID"
              title={t('invoice')}
            />
            <ColumnDefinition id="DateOrdered" title={t('ordered')} customComponent={CustomDateFormat} />
            <ColumnDefinition id="customerId" title={t('customerName')} />
            <ColumnDefinition id="PaidFullDate" title={t('paidFull')} customComponent={CustomDateFormat} />
            <ColumnDefinition
              id="taxTotal"
              title={t('taxTotal')}
            />
            <ColumnDefinition id="shipTotal" title={t('ship')} />
            <ColumnDefinition id="payAmounts" title={t('amount')} />
            <ColumnDefinition
              id="balance"
              title={t('balance')}
            />
            <ColumnDefinition id="status" title={t('status')} />
            <ColumnDefinition id="paymentMethod" title={t('paymentInfo')} />
          </RowDefinition>
        </Griddle>
        <CustomShowPerPage fetchRequest={fetchInvoiceRequest} {...this.props} />
        <DownloadInvoiceDialog />
      </div>
    );
  }
}

InvoiceGriddle.propTypes = propTypes;

export default InvoiceGriddle;
