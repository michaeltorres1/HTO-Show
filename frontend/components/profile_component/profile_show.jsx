import React from 'react';

class ProfileShow extends React.Component {
  constructor(props){
    super(props);
    
    this.state = { username: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.user_id);
  }

  handleChange() {
    return(e) => {
      this.setState({ 'username': e.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.removeUser(this.props.match.params.user_id);
    this.props.logout();
    this.props.history.push('/#');
  }

  render () {
    
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>
    }

    return (
      <div className="profile-form">
        <div className="row">
          Hi<div className="profile-name">{user.username}</div>!
        </div>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <button className="delete-btn" type="submit" value="Submit">DELETE ACCOUNT</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ProfileShow;