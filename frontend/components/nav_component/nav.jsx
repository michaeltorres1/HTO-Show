import React from 'react';
// import Home from '../home_component/home';
// import Sidebar from "../sidebar";
import { slide as Menu } from 'react-burger-menu'

// TODO MAKE A SIDEBAR OR COLLAPSIBLE MENU
class Nav extends React.Component {

  constructor (props) {
    super (props);
    
    // this.state = this.props.currentUser;
    // this.state = { sidebarOpen: false,
    //  };
    // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  // onSetSidebarOpen(open) {
  //   this.setState({ sidebarOpen: open });
  // }

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
      <div className="home-content">
        <div className="nav">
          <div className="left">
            {/* <a className="nav-item nav-browse">
              <i className="material-icons nav-icon nav-icon-browse">menu</i>
              BROWSE
            </a> */}
            <a href="#" className="nav-item nav-search">
              <i className="material-icons nav-icon">search</i>
              {/* <input className="search-input-nav" type="submit" value="SEARCH"/> */}
              <input className="search-input-nav" type="search"/>
            </a>
          </div>
          <div className="middle">
            <h1 className="nav-title">HTO SHOW</h1>
          </div>
          <div className="right">
            {signup}
            <div onClick={() => this.props.openModal('login')} className="nav-item nav-signin">{username}</div>
          </div>
        </div>
        <div className="nav-divider"></div>
      </div>
      </div>
    );
  }
}

export default Nav;