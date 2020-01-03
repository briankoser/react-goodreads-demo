import React from 'react';
import Search from './Search';
import UserPresentation from './UserPresentation';

class GoodreadsPresentation extends React.Component {
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
        <UserPresentation goodreadsUserData={this.state.goodreadsUserData} />
      </div>
    )
  }
}

export default GoodreadsPresentation;