import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class FavoriteIndex extends React.Component {
  componentDidMount () {
    this.props.fetchFavorites(this.props.user_id);
  }
  
  render () {    
    if (!this.props.movies) {
      return null;
    }

    if (!this.props.user_id) {
      return (
        <div className="movie-container">
          <div className="movie-list-error">
            must be signed in to see favorites
          </div>
        </div>
      )
    } else if (this.props.movies.length === 0) {
      return (
        <div className="movie-container">
          <div className="movie-list-error">
            No favorites have been added yet!
          </div>
        </div>
      )
    }

    let favorites = this.props.movies.map(favorite => {
      console.log(this.props);
      return (
        <li key={favorite.id}>
          <div className="movie-img-container">
            <Link to={`/movies/${favorite.id}`}>
              <img src={favorite.photoUrl} alt="" className="movie-img"/>
            </Link>
            <div className="movie-title">{favorite.title}</div>
          </div>
        </li>
      );
    });

    return (
      <div className="movie-container">
        <div className="movie-list">
          {favorites}
        </div>
      </div>
    );
  }
}

export default FavoriteIndex;