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

class UserPresentation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoading: false,
        items: []
      };
    }
  
    render() {
      const { error, isLoading } = this.state;
      const goodreadsUserData = this.props.goodreadsUserData;
      console.log(`UserDate render: ${goodreadsUserData}`);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (isLoading) {
        return <div>Loading...</div>;
      } else if (goodreadsUserData.length === 0) {
        return null;
      } else {
        return (
          <React.Fragment>
            <h3>Goodreads User</h3>
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
            <h4>Updates</h4>
            <UpdateList updates={goodreadsUserData.user[0].updates[0].update} />
          </React.Fragment>
        );
      }
    }
  }

  export default UserPresentation;