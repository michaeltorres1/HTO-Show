import { connect } from 'react-redux';
import MovieIndex from './movie_index';
import { fetchMovies } from '../../actions/movie_actions';

const mapStateToProps = state => ({
  movies: Object.keys(state.entities.movies).map(movie => state.entities.movies[movie]),
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(MovieIndex);