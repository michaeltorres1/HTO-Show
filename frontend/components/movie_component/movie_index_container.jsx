import { connect } from 'react-redux';
import MovieIndex from './movie_index';
import { fetchMovies } from '../../actions/movie_actions';

const mapStateToProps = state => {
  return {
    movies: Object.keys(state.movies).map(id => state.movies[id]),
  }
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(MovieIndex);