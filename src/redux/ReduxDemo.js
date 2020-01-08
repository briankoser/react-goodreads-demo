import React from 'react';
import { connect } from 'react-redux';
import { activateGeod, closeGeod, addBook } from '../redux/actions'
import BookListContainer from './BookListContainer'

// App.js
export class ReduxDemo extends React.Component {
  render() {
        let bookInput = React.createRef();
        let handleAddBookClick = () => {
          let title = bookInput.current.value;
          if (title !== '') {
            this.props.addBook(title); 
          }

          bookInput.current.value = '';
        }

        return (
            <>
                <h2>Redux Demo</h2>
                <h3>{this.props.geod.title || 'Hello World!'}</h3>

                {this.props.geod.title ? (
                <button onClick={this.props.closeGeod}>Exit Geod</button>
                ) : (
                <button
                onClick={() =>
                    this.props.activateGeod({ title: 'I am a geo dude!' })
                }
                >
                Click Me!
                </button>
                )}

                <h3>Add a book to the reading list</h3>
                <label>
                  Book Title
                  <input type="text" ref={bookInput} />
                </label>
                <button onClick={handleAddBookClick}>Add Book</button>
                <BookListContainer />
            </>
        );
    }
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
  books: state.books
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
  addBook
};

const ReduxDemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo);

export default ReduxDemoContainer;