import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="what">
        <div id="mySidenav" className="sidenav">
          <Link to="/" id="home">
            <div className="home-text">HOME</div>
          </Link>
          <Link to="/movies" id="movies-tab">
            <div className="movie-text">MOVIES</div>
          </Link>
          <Link to={`/users/2/favorites`} id="collections">
            <div className="collections-text">FAVS</div>
          </Link>
          <Link to="/" id="profile">
            <div className="profile-text">PROFILE</div>
          </Link>

          {/* <Link to={`/posts/${movie.id}`}>{movie.title}</Link> */}
        </div>
      </div>
    );
  }
}

export default Sidebar;