import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import Nav from './nav';

const mapStateToProps = ({ session, entities: { users } }) => {
  return({
    currentUser: users[session.id],
    sidebarOpen: true,
  })
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);