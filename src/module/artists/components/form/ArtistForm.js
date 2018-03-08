import React from 'react';
import { Field } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import PropTypes from 'prop-types';
import SystemMessage from '../../../notifications/system/components/SystemMessage';
import Panel from '../../../common/components/Panel';
import InputField from '../../../common/components/form/InputField';
import RadioGroup from '../../../common/components/form/RadioGroup';
import SubmitArtistFormButton from '../../containers/SubmitArtistFormButton';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};

const defaultProps = {
  initialValues: {},
};

/**
 * @function UserForm
 * @param {Function} handleSubmit
 * @param {Function} submitForm
 * @param {Object} initialValues
 * @returns {XML}
 */
function ArtistForm({ t, handleSubmit, submitForm, closeDialog, initialValues }) {
  const { userId: isFormTypeEdit } = initialValues;
  return (
    <Panel
      title={isFormTypeEdit ? 'Edit Artist' : 'Add Artist'}
      panelHeadingClassName="users-from-panel-heading">
      <SystemMessage />
      <form
        onSubmit={handleSubmit(submitForm)}
        className="readmin-form users-form">
        <div className="col-sm-12">
          <div className="row  align-items-center">
            <div className="col-md-6">
              <Field
                id="your-first-name"
                placeholder={t('artists:edit.firstName')}
                name="firstName"
                fullWidth={true}
                component={InputField}
                autoComplete="new-username"
              />
            </div>
            <div className="col-md-6">
              <Field
                id="your-middle-name"
                placeholder={t('artists:edit.middle')}
                name="middle"
                fullWidth={true}
                component={InputField}
                autoComplete="new-username"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <Field
            id="your-last-name"
            name="lastName"
            fullWidth={true}
            component={InputField}
            autoComplete="new-username"
            placeholder={t('artists:edit.lastName')}
          />
        </div>
        <div className="col-sm-12">
          <div className="row align-items-center">
            <div className="col-md-4">
              <label> {t('artists:edit.consignor')}:</label>
            </div>
            <div className="col-md-8">
              <Field
                id="isConsignor"
                name="isConsignor"
                type="text"
                fullWidth={true}
                component={RadioGroup}
                style={{ display: 'inline-flex' }}
                autoComplete="new-consignor">
                <RadioButton value={true} label="Yes" />
                <RadioButton value={false} label="No" />
              </Field>

            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="row align-items-center">
            <div className="col-md-4">
              <label> {t('artists:edit.active')}:</label>
            </div>
            <div className="col-md-8">
              <Field
                id="active"
                name="active"
                type="text"
                fullWidth={true}
                component={RadioGroup}
                style={{ display: 'inline-flex' }}
                autoComplete="new-active">
                <RadioButton value={true} label="Yes" />
                <RadioButton value={false} label="No" />
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
              <SubmitArtistFormButton label={t('artists:edit.submit')} />
            </div>
          </div>
        </div>
      </form>
    </Panel >
  );
}

ArtistForm.defaultProps = defaultProps;
ArtistForm.propTypes = propTypes;

export default ArtistForm;
