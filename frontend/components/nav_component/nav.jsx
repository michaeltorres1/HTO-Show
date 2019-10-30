import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Nav extends React.Component {

  constructor (props) {
    super (props);
  }

  render() {
    let user = this.props.currentUser;
    let username = user ?
      <Link
        style={{ outline: 'none' }}
        className="nav-item nav-sigin"
        to={`/users/${user.id}/profile`}>{"HI " + user.username.toUpperCase()}
      </Link> :
      <div onClick={() => this.props.openModal('login')} className="nav-item nav-signin">SIGN IN</div>;
    let signup;

    if (!this.props.currentUser) {
      signup = <div className="nav-item nav-signup" onClick={() => this.props.openModal('signup')}>SIGN UP</div>
    } else {
      signup = <div className="nav-item nav-signup" onClick={() => this.props.logout()}>LOGOUT</div>
    }

    return (
      <div className="container">
        <div className="nav">
          <div className="left">
            <a href="https://github.com/michaeltorres1"><i class="fab fa-github git"></i></a>
            <a href="https://angel.co/michael-torres-21"><i class="fab fa-angellist angel"></i></a>
            <a href="https://www.linkedin.com/in/michael-torres-8649aa178/"><i class="fab fa-linkedin linkedin"></i></a>
          </div>
          <div className="middle">
            <h1 className="nav-title">
              <a href="#">HTO SHOW</a>
            </h1>
          </div>
          <div className="right">
            {username}
            {signup}
          </div>
        </div>
        <div className="nav-divider"></div>
      </div>
      );
    }
  }
  
  export default Nav;