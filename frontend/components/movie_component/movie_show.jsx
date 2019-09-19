import React from 'react';
import { Link } from 'react-router-dom';

class MovieShow extends React.Component {

  componentDidMount () {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render () {
    const { movie } = this.props;

    if (!movie) {
      return <div>Loading...</div>
    }

    let year = movie.release_date.split("-")[0];
  
    // <video width and height>
    //   <source type="video/mp4" src="mov_bbb.mp4">
    // </video>

    return (
      <div className="movie-show-container">
        <div className="movie-show-img-container">
          <video controls poster={movie.photoUrl} width="80%" height="60%">
            <source src={movie.videoUrl} type="video/mp4"/>
          </video>
          <div className="movie-show-content">
            <h1 className="movie-show-title">{movie.title}</h1>
            <p className="movie-show-rating">RATING | {movie.rating}</p>
            <p className="movie-show-description">{movie.description}</p>
            <div className="movie-show-release-date">{year}</div>
          </div>
        </div>
        {/* <Link to="/">Back to index</Link> */}
      </div>
    )
  }
}

export default MovieShow;