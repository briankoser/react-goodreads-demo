import React from 'react'

const Book = ({ onClick, title }) => (
  <tr>
      <td>{title}</td>
      <td><button onClick={onClick}>Delete</button></td>
  </tr>
)

export default Book