import { connect } from 'react-redux';
import ProfileShow from './profile_show';
import { fetchUser, removeUser } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.user_id;

  return {
    user: state.entities.profile[userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    removeUser: id => dispatch(removeUser(id))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow);