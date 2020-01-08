import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions'
import BookListContainer from './BookListContainer'

// ReduxDemo.js
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

// ReduxDemoContainer.js
const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = {
  addBook
};

const ReduxDemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo);

export default ReduxDemoContainer;