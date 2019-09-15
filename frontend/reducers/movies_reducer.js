import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions';

const MoviesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return Object.assign({}, oldState, action.movies);
    case RECEIVE_MOVIE:
      newState = Object.assign({}, oldstate, { [action.movie.id]: action.movie });
      return newState;
    default:
      return oldState;
  }
};

export default MoviesReducer;