import React from 'react';
const xml2js = require('xml2js');

const request = new Request(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/user/show/4812558.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}`, {
  headers: {
    'X-Requested-By': 'XMLHttpRequest'
  }
});

class UpdateList extends React.Component {
  renderItem(item, i) {
    function createMarkup(text) {
      console.log(text);
      return {__html: text};
    }

    return (
      <li key={item.link} dangerouslySetInnerHTML={createMarkup(item.action_text[0])} />
    )
  }
  
  render() {
    return (
      <ol>{this.props.updates.map(this.renderItem)}</ol>
    )
  }
}

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
          (error) => {
            // If there is a network error, just use the response stored locally
            console.log(error);
            return fetch(new Request('goodreadsResponse.xml'))
              .then(res => res.text());
          })
        .then(str => {console.log(str); return xml2js.parseStringPromise(str)})
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
      const { error, isLoaded } = this.state;
      const goodreadsData = this.state.items.GoodreadsResponse;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <React.Fragment>
            <h2>Goodreads User</h2>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td><a href={goodreadsData.user[0].link}>{goodreadsData.user[0].name[0]}</a></td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>{goodreadsData.user[0].location[0]}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td><a href={goodreadsData.user[0].website[0]}>{goodreadsData.user[0].website[0]}</a></td>
                </tr>
              </tbody>
            </table>
            <h3>Updates</h3>
            <UpdateList updates={goodreadsData.user[0].updates[0].update} />
          </React.Fragment>
        );
      }
    }
  }

  export default User;