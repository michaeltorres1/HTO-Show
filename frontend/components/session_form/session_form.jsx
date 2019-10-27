import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    let myEvent = (e) => {
      if (e.currentTarget.value === 'DEMO') {
        this.setState({ [field]: 'demo', 'password': 'password' });
      } else {
        this.setState({ [field]: e.currentTarget.value });
      }
    }

    return myEvent;
  }

  handleDemoLogin (e) {
    if (e.currentTarget.value === 'DEMO') {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let formType = this.props.formType;
    formType = formType.toUpperCase();

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div onClick={this.props.closeModal} className="close-x"><i class="fas fa-times-circle fa-4x"></i></div>
          <div className="modal-input">
            <div className="modal-title">
              <h3>SIGN IN</h3>
            </div>
            <label className="input-person">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="username"
              />
            </label>
            <br />
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="password"
              />
            </label>
            <br />
            <div className="row">
              <button className="signin-btn" type="submit" value={formType}>SIGN IN</button>
              <button className="demo-btn" type="submit" id="demo-btn" onClick={this.update('username')} value="DEMO">LOGIN AS DEMO USER</button>
            </div>
            <div className="errors">{this.renderErrors()}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);