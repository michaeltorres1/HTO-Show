import React from 'react';
import { Link } from 'react-router-dom';

class Example extends React.Component {

  render() {
    return (
      <div className="what">
        <div id="mySidenav" className="sidenav">
          <Link to="/" id="home">
            <div className="home-text">home</div>
          </Link>
          <Link to="/movies" id="movies-tab">
            <div className="movie-text">movies</div>
          </Link>
          <Link to="/" id="collections">
            <div className="collections-text">favs</div>
          </Link>
          <Link to="/" id="profile">
            <div className="profile-text">profile</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Example;