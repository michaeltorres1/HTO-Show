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
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <div className="errors">{this.renderErrors()}</div>
          <br />
          <div className="modal-input">
            <p className="login-demo-message">LOGIN AS DEMO USER</p>
            <input type="submit" id="demo-btn" onClick={this.update('username')} className="demo-submit" value="DEMO"/>
            <fieldset className="wrapper-line">
              <legend>OR</legend>
            </fieldset>
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
            <input className="session-submit" type="submit" value={formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);