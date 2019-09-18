import { connect } from 'react-redux';
import MovieShow from './movie_show';
import { fetchMovie } from '../../actions/movie_actions';

const mapStateToProps = (state, ownProps) => {
  let movieId = ownProps.match.params.movieId;

  return {
    movie: state.entities.movies[movieId],
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchMovie: id => dispatch(fetchMovie(id)) };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(MovieShow);