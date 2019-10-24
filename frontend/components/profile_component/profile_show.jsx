import React from 'react';

class ProfileShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.user_id);
  }

  render () {
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>
    }

    return (
      <div>{user.id}</div>
    )
  }
}

export default ProfileShow;