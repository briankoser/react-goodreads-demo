import { connect } from 'react-redux';
import { addBook, deleteBook } from '../redux/actions'
import BookList from './BookList'

const mapStateToProps = state => ({
    books: state.books
});
  
const mapDispatchToProps = {
    addBook,
    deleteBook
};
  
const BookListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);
  
export default BookListContainer;