import React from 'react';
import Home from '../home_component/home';

class Nav extends React.Component {

  constructor (props) {
    super (props);
    this.state = this.props.currentUser;
  }

  render() {
    let user = this.props.currentUser;
    let username = user ? user.username.toUpperCase() : "SIGN IN";
    let signup;

    if (username === "SIGN IN") {
      signup = <div className="nav-item nav-signup" onClick={() => this.props.openModal('signup')}>SIGN UP</div>
    } else {
      signup = <div className="nav-item nav-signup" onClick={() => this.props.logout()}>LOGOUT</div>
    }

    return (
      <div className="container">
      <div className="home-content">
        <div className="nav">
          <div className="left">
            <a href="#" className="nav-item nav-browse">
              <i className="material-icons nav-icon nav-icon-browse">menu</i>
              BROWSE
            </a>
            <a href="#" className="nav-item nav-search">
              <i className="material-icons nav-icon">search</i>
              SEARCH
            </a>
          </div>
          <div className="middle">
            <h1 className="nav-title">HTO SHOW</h1>
          </div>
          <div className="right">
            {signup}
            <div onClick={() => this.props.openModal('login')} className="nav-item nav-signin">Hi {username}!</div>
          </div>
        </div>
        <div className="nav-divider"></div>
      </div>
      </div>
    );
  }
}

export default Nav;