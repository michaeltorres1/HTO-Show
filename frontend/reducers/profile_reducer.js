import { RECEIVE_USER, REMOVE_USER } from '../actions/profile_actions';

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case REMOVE_USER:
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default profileReducer;