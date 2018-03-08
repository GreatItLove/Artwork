import { connect } from 'react-redux';

import SubmitBtnLoader from '../../common/components/form/SubmitBtnLoader';

const mapStateToProps = state => ({ loading: state.auth.loading });
export default connect(mapStateToProps)(SubmitBtnLoader);
