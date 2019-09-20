import { RECEIVE_ALL_FAVORITES, RECEIVE_FAVORITE } from '../actions/favorite_actions';

const FavoritesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_FAVORITES:
      return Object.assign({}, action.favorites);
    case RECEIVE_FAVORITE:
      newState = Object.assign({}, oldState, { [action.favorite.id]: action.favorite });
      return newState;
    default:
      return oldState;
  }
};

export default FavoritesReducer;