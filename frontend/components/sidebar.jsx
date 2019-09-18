import React from 'react';

class Example extends React.Component {

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="http://localhost:3000/#/movies" id="home">
          <div className="home-text">home</div>
          </a>
          <a href="http://localhost:3000/#/" id="movies-tab">
            <div className="movie-text">movie</div>
          </a>
          <div></div>
          <a href="#" id="collections">
            <div className="collections-text">collections</div>
          </a>
          <div></div>
          <a href="#" id="profile">
            <div className="profile-text">profile</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Example;