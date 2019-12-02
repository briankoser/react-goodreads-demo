import React from 'react';
const xml2js = require('xml2js');

const request = new Request(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/user/show/4812558.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}`, {
  headers: {
    'X-Requested-By': 'XMLHttpRequest'
  }
});

class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch(request)
        .then(res => {
          console.log(res);
          if (!res.ok) throw new Error(`Goodreads API request error, Status: ${res.status}`);
          return res.text();
        })
        .catch(
          async (error) => {
            // If there is a network error, just use the response stored locally
            console.log(error);
            const res = await fetch(new Request('goodreadsResponse.xml'));
            console.log(res);
            return res;
          })
        .then(str => xml2js.parseStringPromise(str))
        .then(
          (result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <h1>User {items.GoodreadsResponse.user[0].name[0]}</h1>
        );
      }
    }
  }

  export default User;