import React from 'react';

class Nav extends React.Component {

  constructor (props) {
    super (props);
  }

  render() {
    let user = this.props.currentUser;
    let username = user ? "HI " + user.username.toUpperCase() : "SIGN IN";
    let signup;

    if (username === "SIGN IN") {
      signup = <div className="nav-item nav-signup" onClick={() => this.props.openModal('signup')}>SIGN UP</div>
    } else {
      signup = <div className="nav-item nav-signup" onClick={() => this.props.logout()}>LOGOUT</div>
    }

    return (
      <div className="container">
        <div className="nav">
          <div className="left"></div>
          <div className="middle">
            <h1 className="nav-title">
              <a href="#">HTO SHOW</a>
            </h1>
          </div>
          <div className="right">
            <div onClick={() => this.props.openModal('login')} className="nav-item nav-signin">{username}</div>
              {signup}
            </div>
          </div>
        <div className="nav-divider"></div>
      </div>
      );
    }
  }
  
  export default Nav;