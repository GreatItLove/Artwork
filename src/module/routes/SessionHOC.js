import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLogged: !!state.auth.token,
  startPage: state.auth.startPage
});

function SessionHOC(WrappedComponent) {
  return connect(mapStateToProps)(WrappedComponent);
}

export default SessionHOC;
