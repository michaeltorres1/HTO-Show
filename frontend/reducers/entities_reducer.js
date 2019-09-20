import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import favoritesReducer from './favorites_reducer';

export default combineReducers ({
  users: usersReducer,
  movies: moviesReducer,
  favorites: favoritesReducer,
});
