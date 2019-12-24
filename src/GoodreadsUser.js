import React from 'react';
import Search from './Search';
import UserData from './UserData';

class GoodreadsUser extends React.Component {
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
        <Search onGoodreadsFetch={this.handleChange} />
        <UserData goodreadsUserData={this.state.goodreadsUserData} />
      </div>
    )
  }
}

export default GoodreadsUser;