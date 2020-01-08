import React from 'react'
import Book from './Book'

const BookList = ({ books, deleteBook }) => (
  <table>
      <tbody>
        <tr>
            <th>Title</th>
            <th>Delete</th>
        </tr>
        {books.map(book => (
            <Book key={book.id} title={book.title} onClick={() => deleteBook(book.id)} />
        ))}
      </tbody>
  </table>
)

export default BookList