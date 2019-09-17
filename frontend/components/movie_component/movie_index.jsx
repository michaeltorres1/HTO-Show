import React from 'react';


class MovieIndex extends React.Component {
  
  componentDidMount () {
    this.props.fetchMovies();
  }

  render () {

    console.log(this.props.movies);
    let movies = this.props.movies.map(movie => {
      return (
        <li key={movie.id}>
          <div className="movie-img-container">
            <img src={movie.photoUrl} alt="" className="movie-img"/>
            <div className="movie-title">{movie.title}</div>
          </div>
        </li>
      )
    });

    return (
      <div className="movie-container">
        <ul className="movie-list">
          {movies}
        </ul>
      </div>
    );
  }
}

export default MovieIndex;