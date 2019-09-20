import React from 'react';
// import { Link } from 'react-router-dom';

class FavoriteIndex extends React.Component {
  componentDidMount () {
    this.props.fetchFavorites(this.props.user_id);
  }
  
  render () {    
    if (!this.props.movies) {
      return null;
    }

    let favorites = this.props.movies.map(favorite => {
      console.log(this.props);
      return (
        <li key={favorite.id}>
          <div className="movie-img-container">
            <img src={favorite.photoUrl} alt="" className="movie-img"/>
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