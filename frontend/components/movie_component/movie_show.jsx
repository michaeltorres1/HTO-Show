import React from 'react';

class MovieShow extends React.Component {

  componentDidMount () {
    this.props.fetchMovie(this.props.match.params.movieId);    
  }

  handleFavorite(id) {
    this.props.createFavorite(id);
  }

  playVideo() {
    this.refs.vidRef.play();
  }

  pauseVideo() {
    this.refs.vidRef.pause();
  }

  render () {
    const { movie } = this.props;
    
    if (!movie) {
      return <div>Loading...</div>
    }

    return (
      <div className="movie-show-container">
        <div className="movie-show-img-container">
          <video
            src={movie.videoUrl}
            ref="vidRef"
            controls
            poster={movie.photoUrl}
            width="80%"
            height="80%">
          </video>
          <div className="movie-show-content">
            <h1 className="movie-show-title">{movie.title}</h1>
            <p className="movie-show-rating">RATING | {movie.rating}</p>
            <p className="movie-show-description">{movie.description}</p>
            <button className="play-btn" onClick={this.playVideo.bind(this)}>PLAY</button>
            <button className="pause-btn" onClick={this.pauseVideo.bind(this)}>PAUSE</button>
            <button className="collect-btn" onClick={() => this.handleFavorite(`${movie.id}`)}>ADD TO COLLECTION</button>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieShow;