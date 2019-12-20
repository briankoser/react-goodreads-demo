import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {userID: ''};
  }
  
  handleChange(event) {
    this.setState({userID: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Search for Goodreads User</h2>
        <form>
          <label>
            Goodreads User ID
            <input type="text" value={this.state.userID} onChange={this.handleChange} />
          </label>
          <span>(You can use 4812558)</span>
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default Search;