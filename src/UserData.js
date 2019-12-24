import React from 'react';

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

class UserData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    render() {
      // const { error, isLoaded } = this.state;
      const goodreadsUserData = this.props.goodreadsUserData;
      console.log(`UserDate render: ${goodreadsUserData}`);
      // if (error) {
      //   return <div>Error: {error.message}</div>;
      // } else if (!isLoaded) {
      //   return <div>Loading...</div>;
      // } else {
if(goodreadsUserData == '') {  return <div>Not loaded</div>; } else {
        return (
          <React.Fragment>
            <h2>Goodreads User</h2>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td><a href={goodreadsUserData.user[0].link}>{goodreadsUserData.user[0].name[0]}</a></td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>{goodreadsUserData.user[0].location[0]}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td><a href={goodreadsUserData.user[0].website[0]}>{goodreadsUserData.user[0].website[0]}</a></td>
                </tr>
              </tbody>
            </table>
            <h3>Updates</h3>
            <UpdateList updates={goodreadsUserData.user[0].updates[0].update} />
          </React.Fragment>
        );
      }
    }
  }

  export default UserData;