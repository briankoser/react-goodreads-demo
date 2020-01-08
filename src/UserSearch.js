import React from 'react';
const xml2js = require('xml2js');

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userID: "4812558"
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    
    let url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/user/show/${this.state.userID}.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}`;
    console.log(`Goodreads url: ${url}`);

    let request = new Request(url, {
      headers: {
        'X-Requested-By': 'XMLHttpRequest'
      }
    });

    fetch(request)
      .then(res => {
        console.log(res);
        if (!res.ok) throw new Error(`Goodreads API request error, Status: ${res.status}`);
        return res.text();
      })
      // .catch(
      //   (error) => {
      //     // If there is a network error, just use the response stored locally
      //     console.log(error);
      //     return fetch(new Request('goodreadsResponse.xml'))
      //       .then(res => res.text());
      //   })
      .then(str => {console.log(str); return xml2js.parseStringPromise(str)})
      .then(
        (result) => {
          console.log(result);
          this.props.onGoodreadsFetch(result.GoodreadsResponse);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.props.onGoodreadsFetch(error);
        }
      )
  }

  render() {
    return (
      <>
        <h3>Search for Goodreads User</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Goodreads User ID
            <input type="text" defaultValue={this.state.userID} onChange={event => this.setState({ userID: event.target.value })} type="search" aria-label="Search for Goodreads user by ID" />
          </label>
          <span>(also try 54340861)</span>
          <input type="submit" value="Search" />
        </form>
      </>
    )
  }
}

export default UserSearch;