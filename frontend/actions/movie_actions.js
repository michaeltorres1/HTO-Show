import * as MovieApiUtil from '../util/movie_api_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

const receiveAllMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});
 
export const fetchMovies = () => dispatch => {
  return MovieApiUtil.fetchMovies().then(movies => dispatch(receiveAllMovies(movies)))
};

export const fetchMovie = id => dispatch => (
  MovieApiUtil.fetchMovie(id).then(movie => dispatch(receiveMovie(movie)))
);