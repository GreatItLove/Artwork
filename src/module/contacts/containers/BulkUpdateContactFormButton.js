import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import muiThemeable from 'material-ui/styles/muiThemeable';

import SubmitBtnLoader from '../../common/components/form/SubmitBtnLoader';

/**
 * @function SubmitUserFormButton
 * @param props
 * @returns {XML}
 */
function BulkUpdateContactFormButton(props) {
  const { muiTheme, ...rest } = props;
  return (
    <SubmitBtnLoader
      backgroundColor={muiTheme.palette.colorBrandOrange}
      labelColor="#ffffff"
      style={{ boxShadow: 'none' }}
      primary={false}
      {...rest}
    />
  );
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.contact.fetching
});

const enhance = compose(connect(mapStateToProps), muiThemeable());
export default enhance(BulkUpdateContactFormButton);
