import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let userId = null;
    
    if (this.props.currentUser) {
      userId = this.props.currentUser.id;
    }

    const profile = (
      <React.Fragment>
        <Link to={`/users/${userId}/favorites`} id="collections">
          <div className="collections-text">FAVS</div>
        </Link>

        <Link to={`/users/${userId}/profile`} id="profile">
          <div className="profile-text">PROFILE</div>
        </Link>
      </React.Fragment>
    )

    return (
      <div className="what">
        <div id="mySidenav" className="sidenav">
          <Link to="/" id="home">
            <div className="home-text">HOME</div>
          </Link>
          <Link to="/movies" id="movies-tab">
            <div className="movie-text">MOVIES</div>
          </Link>
          {userId ? profile : null}
        </div>
      </div>
    );
  }
}

export default Sidebar;