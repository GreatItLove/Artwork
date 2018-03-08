import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { MenuItem, RefreshIndicator } from 'material-ui';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';

import SelectField from '../../../common/components/form/SelectField';
import InputField from '../../../common/components/form/InputField';
import Panel from '../../../common/components/Panel';
import CloseIcon from '../../../common/components/header/CloseIcon';
import BulkUpdateContactFormButton from '../../containers/BulkUpdateContactFormButton';
import SystemMessage from '../../../notifications/system/components/SystemMessage';

const propTypes = {
  selectedCheckBox: PropTypes.array.isRequired,
  bulkUpdate: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  closeBulkUpdateDialog: PropTypes.func.isRequired,
  bulkUpdateDialogData: PropTypes.object.isRequired,
}

class BulkUpdateContactForm extends Component {
  submitForm = formProps => {
    const { selectedCheckBox, bulkUpdate } = this.props;
    if (!_isEmpty(formProps)) {
      bulkUpdate({
        ...formProps,
        customerIds: selectedCheckBox.toString(),
      });
    }
  };

  render() {
    const { handleSubmit, closeBulkUpdateDialog, bulkUpdateDialogData, t } = this.props;
    const refreshIndicatorStyle = { position: 'absolute', top: '50%', left: '50%' };
    const actions = (
      <div className="col-sm-12">
        <div className="row">
          <div className="col-md-7" />
          <div className="col-md-2 my-auto">
            <span className="users cancel-link" onClick={closeBulkUpdateDialog}>
              CANCEL
            </span>
          </div>
          <div className="col-md-3">
            <BulkUpdateContactFormButton
              onClick={handleSubmit(this.submitForm)}
              label="Update" />
          </div>
        </div>
      </div>
    );
    return (
      <Panel
        title={`Update ${t(`bulkedits.${bulkUpdateDialogData.name}`)}`}
        actions={actions}
        rightElement={<CloseIcon closeDialog={closeBulkUpdateDialog} />}
        panelHeadingClassName="users-from-panel-heading">
        <SystemMessage />
        {this.props[bulkUpdateDialogData.key].length ? (
          <form>
            <div className="col-sm-12" style={{ top: '-10px' }}>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <label>{`Select ${t(`bulkedits.${bulkUpdateDialogData.name}`)} :`}</label>
                </div>
                <div className="col-md-8">
                  <Field
                    id={bulkUpdateDialogData.name}
                    name={bulkUpdateDialogData.name}
                    type="text"
                    fullWidth={true}
                    component={SelectField}>
                    <MenuItem value="" primaryText="Select One" />
                    {_map(this.props[bulkUpdateDialogData.key], (data, key) => (
                      <MenuItem key={key} value={data} primaryText={data} />
                    ))}
                  </Field>
                </div>
                <div className="col-sm-12">
                  <div className="row align-items-center">
                    <div className="col-md-4" />
                    <div className="col-md-8 text-center">
                      <label>OR</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="row align-items-center">
                    <div className="col-md-4" />
                    <div className="col-md-8">
                      <Field
                        id={`new_${bulkUpdateDialogData.name}`}
                        name={`new_${bulkUpdateDialogData.name}`}
                        type="text"
                        fullWidth={true}
                        hintText={`Create new ${t(`bulkedits.${bulkUpdateDialogData.name}`)}`}
                        component={InputField}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
            <div style={refreshIndicatorStyle}>
              <RefreshIndicator left={0} top={0} status="loading" />
            </div>
          )}
      </Panel>
    );
  }
}

BulkUpdateContactForm.propTypes = propTypes;

export default BulkUpdateContactForm;
