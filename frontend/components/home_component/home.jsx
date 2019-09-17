import React from 'react';
import MovieIndexContainer from '../movie_component/movie_index_container';

class Home extends React.Component {
  render () {
    return (
      <div className="home-content">
        <div className="home-image-container">
          <img className="home-img" src={window.homeMovie} />
        </div>
        <MovieIndexContainer />
      </div>
    );
  };
}

export default Home;