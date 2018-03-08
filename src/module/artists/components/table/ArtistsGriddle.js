import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import { RefreshIndicator } from 'material-ui';

import CustomSettings from './CustomSettings';
import CustomCheckBoxCell from '../../../common/components/table/CustomCheckBoxCell';
import CustomActiveCell from '../../../common/components/table/CustomActiveCell';
import CustomNextButton from '../../../common/components/table/CustomNextButton';
import CustomPreviousButton from '../../../common/components/table/CustomPreviousButton';
import CustomShowPerPage from '../../../common/components/table/CustomShowPerPage';
import CustomFilter from '../../../common/components/filter/CustomFilter';
import RowData from '../../../common/HOCs/RowDataHOC';

import CustomCMSNCell from './CustomCMSNCell';
import AddArtistDialog from '../../containers/AddArtistDialog';
import DownloadArtistDialog from '../../containers/DownloadArtistDialog';
import { ARTISTS_EDIT_PATH } from '../../../../config/routesPatch';
import {
  fetchArtistsRequest,
  updateSearchFilter,
  switchArtistFilter,
  checkArtists,
  uncheckArtists,
  bulkArtistEditRequest,
} from '../../artistsActions';

const propTypes = {
  list: PropTypes.array.isRequired,
  appDispatch: PropTypes.func.isRequired
};

const tableStyleConfig = {
  classNames: {
    Table: 'table table-hover',
  }
};

function FullNameActiveCell({ value, griddleKey, rowData }) {
  return (
    <div>
      <NavLink to=/*{`${ARTISTS_EDIT_PATH}/${rowData.artistsId}`}*/{ARTISTS_EDIT_PATH + "/" + rowData.artistsId}> {rowData.firstName} {rowData.lastName} </NavLink>
    </div>
  );
}

const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />
    <Table />
    <SettingsWrapper />
    <Pagination />
  </div>
);

/*
 * @class UsersGriddle
 * @extends React.Component
 * @description Render component
 */
class ArtistsGriddle extends Component {
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */

  constructor(props) {
    super(props);
    this._onSort = this._onSort.bind(this);
    this._onFilter = this._onFilter.bind(this);
    this._onNext = this._onNext.bind(this);
    this._onPrevious = this._onPrevious.bind(this);
    this._onGetPage = this._onGetPage.bind(this);

    const { appDispatch, list } = this.props;
    if (list.length === 0)
      appDispatch(fetchArtistsRequest({ limit: 25, offset: 0 }));

  }

  _onFilter(filterText) {
    const { appDispatch, pagination } = this.props;
    appDispatch(updateSearchFilter(filterText));
    appDispatch(fetchArtistsRequest({ limit: pagination.recordsPerPage, ...filterText }));
  }
  _onSort(sortProperties) {
  }

  _onNext() {
    const { appDispatch, pagination } = this.props;
    appDispatch(fetchArtistsRequest({ limit: pagination.recordsPerPage, offset: pagination.currentPage * pagination.recordsPerPage, ...this.props.searchFilter }));
  }

  _onPrevious() {
    const { appDispatch, pagination } = this.props;
    appDispatch(fetchArtistsRequest({ limit: pagination.recordsPerPage, offset: (pagination.currentPage - 2) * pagination.recordsPerPage, ...this.props.searchFilter }));
  }

  _onGetPage(pageNumber) {
    const { appDispatch, pagination } = this.props;
    appDispatch(fetchArtistsRequest({ limit: pagination.recordsPerPage, offset: (pageNumber - 1) * pagination.recordsPerPage, ...this.props.searchFilter }));
  }

  render() {
    const { t, list, appDispatch, pagination, selectedCheckBox, genres } = this.props;
    let self = this;
    for (var i = 0; i < list.length; i++) {
      if (selectedCheckBox.indexOf(list[i].artistsId) >= 0) {
        list[i].checked = true;
      } else list[i].checked = false;
    }
    let fieldValue = [];
    _map(genres, data => {
      fieldValue.push({ name: data, value: data });
    });
    let filterData = {
      name: 'Artists',
      radio: [
        {
          name: 'active',
          fields: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
        },
        {
          name: 'featured',
          fields: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
        },
        {
          name: 'artworkCount',
          fields: [{ name: 'Yes', value: 1 }, { name: 'No', value: 0 }],
        },
        {
          name: 'genre',
          fields: fieldValue,
        },
      ],
    };
    const settingsData = [
      { name: 'active', key: 'active', value: true },
      { name: 'inactive', key: 'active', value: false },
      { name: 'featured', key: 'featured', value: true },
      { name: 'unfeatured', key: 'featured', value: false },
    ];
    const extraData = {
      appDispatch: appDispatch,
      checkAction: checkArtists,
      unCheckAction: uncheckArtists,
      id: 'artistsId',
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
            onSort: this._onSort,
            onNext: this._onNext,
            onPrevious: this._onPrevious,
            onGetPage: this._onGetPage,
          }}
          components={{
            SettingsWrapper: () => {
              return (
                <CustomSettings
                  t={t}
                  id="artistsIds"
                  appDispatch={self.props.appDispatch}
                  selectedCheckBox={self.props.selectedCheckBox}
                  list={self.props.list}
                  settingsData={settingsData}
                  fetching={self.props.fetching}
                  bulkEditRequest={bulkArtistEditRequest}
                />
              )
            },
            Filter: filter => {
              return (
                <CustomFilter
                  t={t}
                  showingFilter={self.props.showingFilter}
                  searchFilter={self.props.searchFilter}
                  recordCount={self.props.pagination.totalRecordCount}
                  filterData={filterData}
                  switchFilter={switchArtistFilter}
                  setFilter={filter.setFilter}
                  className={filter.className}
                  appDispatch={appDispatch}
                  style={filter.style}
                />
              )
            },
            PageDropdown: () => null,
            NextButton: CustomNextButton,
            PreviousButton: CustomPreviousButton,
            Layout: NewLayout,
            Table: ({ className, style, visibleRows, TableHeading, TableBody, NoResults }) => {
              return (self.props.fetching ?
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
            <ColumnDefinition id="check" title=" "
              customComponent={RowData(CustomCheckBoxCell)}
              extraData={extraData}
            />
            <ColumnDefinition id="firstName" title={t("columns.name")} customComponent={RowData(FullNameActiveCell)} />
            <ColumnDefinition id="artworkCount" title={t("columns.art")} />
            <ColumnDefinition id="icon" title={t("columns.icon")} />
            <ColumnDefinition id="genre" title={t("columns.genre")} />
            <ColumnDefinition id="commission" title={t("columns.cmsn")} customComponent={CustomCMSNCell} />
            <ColumnDefinition id="taxNumber" title={t("columns.taxNumber")} />
            <ColumnDefinition id="featured" title={t("columns.featured")} customComponent={CustomActiveCell} />
            <ColumnDefinition id="active" title={t("columns.active")} customComponent={CustomActiveCell} />
          </RowDefinition>
        </Griddle>
        <CustomShowPerPage fetchRequest={fetchArtistsRequest} {...this.props} />
        <AddArtistDialog />
        <DownloadArtistDialog />
      </div>
    );
  }
}

ArtistsGriddle.propTypes = propTypes;

export default ArtistsGriddle;
