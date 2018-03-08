import React from 'react';
import PropTypes from 'prop-types';
import {
  RadioButton,
  RadioButtonGroup,
  AutoComplete,
  RaisedButton,
  DatePicker,
} from 'material-ui';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _max from 'lodash/max';
import _size from 'lodash/size';
import _split from 'lodash/split';
import _isEqual from 'lodash/isEqual';

const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  setFilter: PropTypes.func,
};

class CustomFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.props.searchFilter;
    let autoCompleteText = {};
    let dateRange = {};
    _map(this.props.filterData.autoComplete, field => {
      autoCompleteText[field.name] = this.filter[field.name];
    });
    _map(this.props.filterData.datePicker, field => {
      dateRange[field.name] = this.filter[field.name];
    });
    this.state = {
      show: this.props.showingFilter,
      filterText: autoCompleteText,
      dateRange: dateRange,
    };
  }
  componentDidMount() {
    const elm = this.refs.filterArea;
    elm.addEventListener('webkitTransitionEnd', this.fadingDone);
  }
  componentWillUnmount() {
    const elm = this.refs.filterArea;
    elm.removeEventListener('webkitTransitionEnd', this.fadingDone);
  }

  fadingDone = () => {
    // will re-render component, removing the animation class
    this.props.appDispatch(this.props.switchFilter(this.state.show));
  };
  hideFilter = () => {
    this.setState({ show: !this.state.show });
  };

  clearFilters = () => {
    const { filterData } = this.props;
    _map(filterData.radio, filter => {
      delete this.filter[filter.name];
    });
    _map(filterData.autoComplete, filter => {
      delete this.filter[filter.name];
    });
    _map(filterData.datePicker, filter => {
      this.filter[filter.name] = filter.defaultDate;
    });
    this.props.setFilter({
      ...this.filter,
      search: this.refs.searchText.value,
    });
  };

  fieldChanged = (event, val) => {
    const { filterData } = this.props;
    let name = event.name ? event.name : val;
    let value = event.value;
    let data;
    _map(filterData.radio, field => {
      _map(field.fields, obj => {
        if (field.name === name && obj.name === value) {
          data = obj.value;
        }
      });
    });
    if (value === 'Yes') this.filter = { ...this.filter, [name]: data };
    else if (value === 'No') this.filter = { ...this.filter, [name]: data };
    else if (value !== 'Any' && value !== undefined) this.filter = { ...this.filter, [name]: data };
    else delete this.filter[name];
    this.props.setFilter({
      ...this.filter,
      search: this.refs.searchText.value,
    });
  };

  handleUpdateInput = searchText => {
    let name = this.refs.autoComplete.props.name;
    this.filter = { ...this.filter, [name]: searchText }
    this.setState({
      ...this.state.filterText,
    });
  };

  handleNewRequest = text => {
    let name = this.refs.autoComplete.props.name;
    this.filter = { ...this.filter, [name]: text }
    this.props.setFilter({
      ...this.filter,
      search: this.refs.searchText.value,
    });
  };
  clearAutoComplete = () => {
    let name = this.refs.autoComplete.props.name;
    delete this.filter[name];
    this.props.setFilter({
      ...this.filter,
      search: this.refs.searchText.value,
    });
  };

  valueToString = value => {
    if (value === undefined) return 'Any';
    if (value === true || value === 1) return 'Yes';
    if (value === false || value === 0) return 'No';
    return value;
  };

  onKeyDown = e => {
    if (e.keyCode === 13) this.search();
  };

  search = () => {
    this.filter = {
      ...this.filter,
      search: this.refs.searchText.value,
    };
    this.props.setFilter(this.filter);
  };

  isShow = () => {
    const { filterData } = this.props;
    const { dateRange } = this.state;
    let radioVal = _filter(filterData.radio, filter => {
      if (this.filter[filter.name] !== undefined) {
        return true;
      }
    });
    let autoVal = _filter(filterData.autoComplete, filter => {
      if (this.state.filterText[filter.name] !== undefined) {
        return true;
      }
    });
    let dateVal = _filter(filterData.datePicker, filter => {
      if (dateRange[filter.name] !== undefined &&
        !_isEqual(this.dateDisplay(dateRange[filter.name]),
          this.dateDisplay(filter.defaultDate))
      ) {
        return true;
      }
    });
    radioVal.push(...autoVal);
    radioVal.push(...dateVal);
    return radioVal.length;
  };

  dateDisplay = date => _split(date.toLocaleString(), ',', 1);

  clearDateFilter = name => {
    _map(this.props.filterData.datePicker, filter => {
      if (filter.name === name) {
        this.filter[name] = filter.defaultDate;
      }
    });
    this.props.setFilter({
      ...this.filter,
      search: this.refs.searchText.value,
    });
  };

  onDateChange = (selectedDateId, event, date) => {
    this.props.setFilter({
      ...this.filter,
      [selectedDateId]: date,
    });
  };

  render() {
    const { filterData, t } = this.props;
    const { filterText, dateRange } = this.state;
    let length = _max(
      _map(filterData.radio, filter => {
        return _size(filter.fields);
      }),
    );
    return (
      <div className="filter-background">
        <div style={{ display: 'flex' }}>
          <div className="col-md-3">
            <div className="input-group">
              <input
                type="text"
                id="username3"
                ref="searchText"
                className={
                  'form-control search-text-field ' + this.props.className
                }
                placeholder={t(`filter.search${filterData.name}`)}
                onKeyDown={this.onKeyDown}
                defaultValue={this.filter.search}
              />
              <span
                className="input-group-addon search-text-field-icon"
                onClick={this.search}>
                <i className="fa fa-search" style={{ color: '#94c0d3' }} />
              </span>
            </div>
          </div>
          <div className="col-md-9 text-align-right">
            <span className="users record-count">
              {t("filter.results")} : {this.props.recordCount}{' '}
            </span>
            <RaisedButton
              label={t("filter.filter")}
              labelPosition="before"
              primary={true}
              icon={<i className="fa fa-sliders text-white" />}
              onClick={this.hideFilter}
              buttonStyle={{ backgroundColor: '#1B6391', borderRadius: '5px' }}
              labelStyle={{ textTransform: 'none' }}
            />
          </div>
        </div>
        <div
          ref='filterArea'
          className={!this.state.show ? 'filter-hidden' : 'filter-open'}
          style={
            !this.state.show
              ? { overflow: 'hidden' }
              : {
                overflow: 'hidden',
                height: Math.max(
                  this.isShow()
                    ? 130 + 32 * length
                    : 60 + 32 * length,
                  143.33,
                ),
              }
          }>
          {this.isShow() ? (
            <div className="filter-area">
              {_map(
                filterData.radio,
                (filter, key) =>
                  this.filter[filter.name] === undefined ? null : (
                    <span key={key} className="filter-item-span">
                      <span>
                        {t(`filter.${filter.name}`)}: {this.valueToString(this.filter[filter.name])}
                        <i
                          className="fa fa-times"
                          name={filter.name}
                          onClick={e => this.fieldChanged(e.target, filter.name)}
                        />
                      </span>
                    </span>
                  ),
              )}
              {_map(
                filterData.autoComplete,
                (filter, key) =>
                  this.filter[filter.name] === undefined ? null : (
                    <span key={key} className="filter-item-span">
                      <span>
                        {t(`filter.${filter.name}`)}: {filterText[filter.name]}{' '}
                        <i
                          className="fa fa-times"
                          name={filter.name}
                          onClick={this.clearAutoComplete}
                        />
                      </span>
                    </span>
                  ),
              )}
              {_map(filterData.datePicker, (filter, key) =>
                dateRange[filter.name] !== undefined &&
                  !_isEqual(this.dateDisplay(dateRange[filter.name]),
                    this.dateDisplay(filter.defaultDate)) ? (
                    <span key={key} className="filter-item-span">
                      <span>
                        {t(`filter.${filter.name}`)}: {this.dateDisplay(dateRange[filter.name])}
                        <i
                          className="fa fa-times"
                          name={filter.name}
                          onClick={this.clearDateFilter.bind(this, filter.name)}
                        />
                      </span>
                    </span>
                  ) : null,
              )}
              <span className="clear-filter-text" onClick={this.clearFilters}>
                <b>Clear Filters </b>
              </span>
            </div>
          ) : null}
          <div className="users filter-container">
            {_map(filterData.radio, (filter, key) => (
              <div key={key} className="col-md-3">
                <span>
                  <b>{t(`filter.${filter.name}`)}</b>
                </span>
                <RadioButtonGroup
                  name={filter.name}
                  defaultSelected={this.valueToString(this.filter[filter.name])}
                  onChange={e => { this.fieldChanged(e.target) }}>
                  <RadioButton
                    value="Any"
                    label="Any"
                    iconStyle={
                      this.valueToString(this.filter[filter.name]) === 'Any'
                        ? { fill: '#E38925' }
                        : null
                    }
                  />
                  {_map(filter.fields, (obj, key) => (
                    <RadioButton
                      key={key}
                      value={obj.name}
                      label={obj.displayName || obj.name}
                      iconStyle={
                        this.valueToString(this.filter[filter.name]) === obj.name
                          ? { fill: '#E38925' }
                          : null
                      }
                    />
                  ))}
                </RadioButtonGroup>
              </div>
            ))}
            {_map(filterData.autoComplete, (filter, key) => (
              <div key={key} className="col-md-3">
                <span>
                  <b>{t(`filter.${filter.name}`)}</b>
                </span>
                <AutoComplete
                  ref='autoComplete'
                  name={filter.name}
                  hintText={filter.name}
                  searchText={this.filter[filter.name]}
                  onUpdateInput={this.handleUpdateInput}
                  menuStyle={{ maxHeight: 250 }}
                  onNewRequest={this.handleNewRequest}
                  dataSource={filter.dataSource}
                  filter={AutoComplete.caseInsensitiveFilter}
                  openOnFocus={true}
                />
              </div>
            ))}
            {_map(filterData.datePicker, (filter, key) => {
              return (
                <div key={key} className="col-md-3" style={{ width: '100%' }}>
                  <span>
                    <b>{t(`filter.${filter.name}`)}</b>
                    <DatePicker
                      hintText={t(`filter.${filter.name}`)}
                      maxDate={new Date()}
                      defaultDate={dateRange[filter.name] || filter.defaultDate}
                      textFieldStyle={{ width: '75%' }}
                      onChange={this.onDateChange.bind(this, filter.name)}
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

CustomFilter.propTypes = propTypes;

export default CustomFilter;
