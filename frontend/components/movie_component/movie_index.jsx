import React from 'react';


class MovieIndex extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount () {
    this.props.fetchMovies();
  }

  render () {
    let movies = this.props.movies.map(movie => {
      return (
        <li key={movie.id} movie={movie}></li>
      );
    });

    return (
      <div>
        <ul>
          {movies}
        </ul>
      </div>
    )
  }
}

export default MovieIndex;