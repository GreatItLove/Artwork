import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

import SelectField from '../../common/components/form/SelectField';
import InputField from '../../common/components/form/InputField';
import SubmitButton from '../containers/SubmitButton';
import { FORGOT_PASSWORD_PATH } from '../../../config/routesPatch';
import * as routes from '../../../config/routesPatch';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};
/**
 * @function LoginForm
 * @param {Function} handleSubmit
 * @param {Function} login
 * @param {Function} t translate function
 * @returns {XML}
 */
function LoginForm({ handleSubmit, login, t }) {
  return (
    <div>
      <div className="auth-login-wrapper">
        <div className="auth-login-fields">
          <div className="py-2 d-md-none" />
          <h4>{t('login.formHeader')}</h4>
          <div className="py-2 d-md-none" />
          <form onSubmit={handleSubmit(login)}>
            <Field
              id="name"
              name="username"
              floatingLabelText={t('login.emailLabel')}
              fullWidth={true}
              component={InputField}
              autoComplete="new-username"
            />
            <Field
              id="pass"
              name="password"
              component={InputField}
              floatingLabelText={t('login.passwordLabel')}
              type="password"
              autoComplete="new-password"
            />
            <Field
              id="start-page"
              name="startPage"
              floatingLabelText={t('login.startPageField')}
              fullWidth={true}
              component={SelectField}
            >
              <MenuItem value={routes.ADMIN_PANEL_BASE_PATH} primaryText={t('login.startPageOption.home')} />
              <MenuItem value={routes.ARTISTS_PATH} primaryText={t('login.startPageOption.artists')} />
              <MenuItem value={routes.CONSIGNMENTS_PATH} primaryText={t('login.startPageOption.consignments')} />
              <MenuItem value={routes.ARTWORK_PATH} primaryText={t('login.startPageOption.artwork')} />
              <MenuItem value={routes.ARTWORK_PATH} primaryText={t('login.startPageOption.artworkAddWizard')} />
              <MenuItem value={routes.CONTACTS_PATH} primaryText={t('login.startPageOption.contacts')} />
              <MenuItem value={routes.CONTACTS_PATH} primaryText={t('login.startPageOption.contactsAddWizard')} />
              <MenuItem value={routes.WEBSITES_PATH} primaryText={t('login.startPageOption.websiteSection')} />
              <MenuItem value={routes.EXIBITIONS_PATH} primaryText={t('login.startPageOption.exhibitions')} />
              <MenuItem value={routes.RESOURCES_PATH} primaryText={t('login.startPageOption.resources')} />
              <MenuItem value={routes.INVOICES_PATH} primaryText={t('login.startPageOption.invoices')} />
              <MenuItem value={routes.QUICK_SALE_PATH} primaryText={t('login.startPageOption.quickSale')} />
              <MenuItem value={routes.VISITOR_TODAY_PATH} primaryText={t('login.startPageOption.visitorToday')} />
              <MenuItem value={routes.SURVEY_RESULTS_PATH} primaryText={t('login.startPageOption.surveyResults')} />
            </Field>
            <div className="pt20">
              <SubmitButton label={t('login.submitBtn')} />
            </div>
            <div className="pt20 links">
              <Link to={FORGOT_PASSWORD_PATH}>{t('login.forgotPassword')}</Link>
              <span>|</span>
              <a href="http://www.managedartwork.com/Demo.cfm" target="_blanko">
                {t('login.register')}
              </a>
            </div>
          </form>
          <div className="py-2 d-md-none" />
        </div>
      </div>
    </div>
  );
}

LoginForm.propTypes = propTypes;

export default LoginForm;
