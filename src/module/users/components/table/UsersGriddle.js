import React, { Component } from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import PropTypes from 'prop-types';
import { RefreshIndicator } from 'material-ui';

import CustomActionCell from './CustomActionCell';

import CustomActiveCell from '../../../common/components/table/CustomActiveCell';
import CustomLastLoggedInCell from '../../../common/components/table/CustomLastLoggedInCell';
import CustomNextButton from '../../../common/components/table/CustomNextButton';
import CustomPreviousButton from '../../../common/components/table/CustomPreviousButton';
import CustomShowPerPage from '../../../common/components/table/CustomShowPerPage';
import CustomFilter from '../../../common/components/filter/CustomFilter';

import DeleteUserDialog from '../../containers/DeleteUserDialog';
import SuspendUserDialog from '../../containers/SuspendUserDialog';
import AddUserDialog from '../../containers/AddUserDialog';
import EditUserDialog from '../../containers/EditUserDialog';
import ResetPasswordDialog from '../../containers/ResetPasswordDialog';
import DownloadUsersDialog from '../../containers/DownloadUsersDialog';
import {
  fetchUsersRequest,
  updateSearchFilter,
  switchUsersFilter,
} from '../../usersActions';

const propTypes = {
  list: PropTypes.array.isRequired,
  appDispatch: PropTypes.func.isRequired,
};

const tableStyleConfig = {
  classNames: {
    Table: 'table table-hover',
  },
};

/**
 * @class UsersGriddle
 * @extends React.Component
 * @description Render component
 */
class UsersGriddle extends Component {
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  _onFilter = filterText => {
    const { appDispatch, pagination } = this.props;

    appDispatch(updateSearchFilter(filterText));
    appDispatch(
      fetchUsersRequest({ limit: pagination.recordsPerPage, ...filterText }),
    );
  };
  _onNext = () => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchUsersRequest({
        limit: pagination.recordsPerPage,
        offset: pagination.currentPage * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };

  _onPrevious = () => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchUsersRequest({
        limit: pagination.recordsPerPage,
        offset: (pagination.currentPage - 2) * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };

  _onGetPage = pageNumber => {
    const { appDispatch, pagination } = this.props;
    appDispatch(
      fetchUsersRequest({
        limit: pagination.recordsPerPage,
        offset: (pageNumber - 1) * pagination.recordsPerPage,
        ...this.props.searchFilter,
      }),
    );
  };

  render() {
    const { list, appDispatch, pagination, t } = this.props;
    let filterData = {
      name: 'Users',
      radio: [
        {
          name: 'active',
          fields: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
        },
        {
          name: 'userType',
          fields: [
            { name: 'SA', value: 'SA' },
            { name: 'Staff', value: 'Staff' },
            { name: 'Gallery', value: 'Gallery' },
            { name: 'Admin', value: 'Admin' },
            { name: 'Webmaster', value: 'Webmaster' },
          ],
        },
        {
          name: 'userLevel',
          fields: [
            { name: '0', value: '0' },
            { name: '1', value: '1' },
            { name: '2', value: '2' },
            { name: '3', value: '3' },
            { name: '4', value: '4' },
          ],
        },
      ],
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
            SettingsWrapper: () => null,
            Filter: filter => {
              return (
                <CustomFilter
                  t={t}
                  showingFilter={this.props.showingFilter}
                  searchFilter={this.props.searchFilter}
                  recordCount={this.props.pagination.totalRecordCount}
                  appDispatch={appDispatch}
                  switchFilter={switchUsersFilter}
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
            Table: ({
              className,
              style,
              visibleRows,
              TableHeading,
              TableBody,
              NoResults,
            }) => {
              return this.props.fetching ? (
                <div
                  className={className}
                  style={{
                    position: 'absolute',
                    bottom: '120px',
                    left: '48%',
                    ...style,
                  }}>
                  <RefreshIndicator left={0} top={0} status="loading" />
                </div>
              ) : visibleRows ? (
                <table className={className} style={style}>
                  <TableHeading />
                  <TableBody />
                </table>
              ) : (
                    <NoResults />
                  );
            },
          }}>
          <RowDefinition>
            <ColumnDefinition id="fullName" title={t("columns.name")} />
            <ColumnDefinition id="email" title={t("columns.email")} />
            <ColumnDefinition
              id="lastLogin"
              title={t("columns.lastLoggedin")}
              customComponent={CustomLastLoggedInCell}
            />
            <ColumnDefinition id="userType" title={t("columns.type")} />
            <ColumnDefinition id="userLevel" title={t("columns.level")} />
            <ColumnDefinition
              id="active"
              title={t("columns.active")}
              customComponent={CustomActiveCell}
            />
            <ColumnDefinition
              id="userId"
              title=" "
              customComponent={CustomActionCell}
              extraData={{ appDispatch }}
            />
          </RowDefinition>
        </Griddle>
        <CustomShowPerPage fetchRequest={fetchUsersRequest} {...this.props} />
        <DeleteUserDialog />
        <SuspendUserDialog />
        <AddUserDialog />
        <EditUserDialog />
        <ResetPasswordDialog />
        <DownloadUsersDialog />
      </div>
    );
  }
}

UsersGriddle.propTypes = propTypes;

export default UsersGriddle;
