import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { MenuItem } from 'material-ui';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import CountryRegion from 'country-region-data';

import SystemMessage from '../../../notifications/system/components/SystemMessage';
import Panel from '../../../common/components/Panel';
import InputField from '../../../common/components/form/InputField';
import SelectField from '../../../common/components/form/SelectField';
import CloseIcon from '../../../common/components/header/CloseIcon';
import SubmitContactFormButton from '../../containers/SubmitContactFormButton';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionData: [],
    };
    this.props.fetchLookup('customerTypes');
  }
  selectCountry = val => {
    let region = null;
    _filter(CountryRegion, country => {
      if (country.countryName === val) {
        region = country.regions;
      }
    });
    this.setState({ regionData: region });
  };

  render() {
    const { handleSubmit, closeDialog, submitForm, customerTypes } = this.props;
    const { regionData } = this.state;
    return (
      <Panel
        title='Add Contact'
        rightElement={<CloseIcon closeDialog={closeDialog} />}
        panelHeadingClassName="users-from-panel-heading">
        <SystemMessage />
        <form
          onSubmit={handleSubmit(submitForm)}
          className="readmin-form users-form">
          <div className="col-sm-12">
            <div className="row  align-items-center">
              <div className="col-md-4">
                <Field
                  id="first-name"
                  placeholder="First Name"
                  name="firstName"
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-username"
                />
              </div>
              <div className="col-md-4">
                <Field
                  id="middle-name"
                  placeholder="Middle Name"
                  name="middle"
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-username"
                />
              </div>
              <div className="col-md-4">
                <Field
                  id="last-name"
                  name="lastName"
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-username"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <Field
              id="email"
              name="eMail"
              fullWidth={true}
              component={InputField}
              autoComplete="new-email"
              placeholder="Email"
            />
          </div>
          <div className="col-sm-12">
            <Field
              id="address"
              name="address"
              fullWidth={true}
              component={InputField}
              autoComplete="new-address"
              placeholder="Address"
            />
          </div>
          <div className="col-sm-12">
            <Field
              id="address-2"
              name="address2"
              fullWidth={true}
              component={InputField}
              autoComplete="new-address2"
              placeholder="Address 2"
            />
          </div>
          <div className="col-sm-12">
            <div className="row align-items-center">
              <div className="col-md-6" style={{ top: '-5px' }}>
                <Field
                  id="city"
                  name="city"
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-city"
                  placeholder="City"
                />
              </div>
              <div className="col-md-6">
                <Field
                  id="customer-type"
                  name="customerType"
                  fullWidth={true}
                  hintText="Customer Type"
                  component={SelectField}>
                  <MenuItem value={null} primaryText='Select a customer type' />
                  {_map(customerTypes, (customer, key) => (
                    <MenuItem key={key} value={customer} primaryText={customer} />
                  ))}
                </Field>
              </div>
            </div>
          </div>
          <div className="col-sm-12" style={{ top: '-10px' }}>
            <div className="row align-items-center">
              <div className="col-md-6">
                <Field
                  id="phone"
                  name="phone"
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-phone"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-6">
                <Field
                  id="zip-code"
                  name="zip"
                  fullWidth={true}
                  component={InputField}
                  autoComplete="new-zip"
                  placeholder="Zip Code"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row align-items-center">
              <div className="col-md-6">
                <Field
                  id="country"
                  name="country"
                  fullWidth
                  component={SelectField}>
                  <MenuItem value='' primaryText='Select a country' />
                  {_map(CountryRegion, (country, key) => (
                    <MenuItem
                      key={key}
                      value={country.countryName}
                      onClick={this.selectCountry.bind(this, country.countryName)}
                      primaryText={country.countryName}
                    />
                  ))}
                </Field>
              </div>
              <div className="col-md-6">
                <Field
                  id="state"
                  name="state"
                  fullWidth
                  disabled={!regionData.length}
                  hintText={!regionData.length ? "No country selected" : "State"}
                  component={SelectField}>
                  <MenuItem value={null} primaryText='Select a state' />
                  {_map(regionData, (region, key) => (
                    <MenuItem
                      key={key}
                      value={region.shortCode}
                      primaryText={region.shortCode}
                    />
                  ))}
                </Field>
              </div>
            </div>
          </div>
          <div className="col-sm-12 pt20">
            <div className="row">
              <div className="col-md-7" />
              <div className="col-md-2 my-auto">
                <span className="cancel-link" onClick={closeDialog}>
                  Cancel
                </span>
              </div>
              <div className="col-md-3">
                <SubmitContactFormButton label="Submit" />
              </div>
            </div>
          </div>
        </form>
      </Panel>
    );
  }
}

ContactForm.propTypes = propTypes;

export default ContactForm;
