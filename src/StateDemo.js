import React from 'react';
import UserSearch from './UserSearch';
import UserPresentation from './UserPresentation';

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {goodreadsUserData: []};
  }

  handleChange(goodreadsUserData) {
    this.setState({goodreadsUserData});
  }
  
  render() {
    return (
      <div className="goodreads-user">
        <h2>State Demo</h2>
        <UserSearch onGoodreadsFetch={this.handleChange} />
        <UserPresentation goodreadsUserData={this.state.goodreadsUserData} />
      </div>
    )
  }
}

export default StateDemo;