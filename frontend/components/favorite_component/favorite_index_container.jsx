import { connect } from 'react-redux';
import FavoriteIndex from './favorite_index'
import { fetchFavorites } from '../../actions/favorite_actions';

const mapStateToProps = state => {
  // let fav_movies = Object.keys(state.entities.movies).map(movie => state.entities.movies[movie]);
  
  let movie_ids = [];

  if (Object.keys(state.entities.favorites).length !== 0) {
    movie_ids = Object.keys(state.entities.favorites).map(prop => state.entities.favorites[prop].movie_id);
  }

  let fav_movies = [];

  Object.values(state.entities.movies).forEach(movie => {
    for (let i = 0; i < movie_ids.length; i++) {
      if (movie.id === movie_ids[i]) {
        fav_movies.push(movie);
      }
    }
  });

  return {
    movies: fav_movies,
    // movies: Object.keys(state.entities.favorites).map(favorite => state.entities.movies[favorite]),
    // movies: Object.values(state.entities.favorites),
    user_id: state.session.id
  }
};

const mapDispatchToProps = dispatch => {
  return { fetchFavorites: (user_id) => dispatch(fetchFavorites(user_id)) }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteIndex);