import React, { useState, useEffect } from "react";
const xml2js = require('xml2js');

function HooksDemo() {
  const [book, setBook] = useState({ book: []});
  const [bookID, setBookID] = useState("2845024");

  useEffect(() => {
    let ignore = false;

    async function fetchBook() {
      let url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/show/${bookID}.xml?key=${process.env.REACT_APP_GOODREADS_API_KEY}`;
      console.log(url);
      let request = new Request(url, {
        headers: {
          'X-Requested-By': 'XMLHttpRequest'
        }
      });
      const result = await fetch(request);
      if (!result.ok) throw new Error(`Goodreads API request error, Status: ${result.status}`);
      const text = await result.text();
      const json = await xml2js.parseStringPromise(text);
      if (!ignore) setBook(json.GoodreadsResponse.book[0]);
    }

    fetchBook();

    return () => { ignore = true; };
  }, [bookID]);

  return (
    <>
      <h2>Hooks Demo</h2>
      <label>
        Goodreads Book ID
        <input value={bookID} onChange={e => setBookID(e.target.value)} /> (also try 77566)
      </label>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <td>{book.title}</td>
          </tr>
          <tr>
            <th>ISBN</th>
            <td>{book.isbn}</td>
          </tr>
          <tr>
            <th>Publication Year</th>
            <td>{book.publication_year}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default HooksDemo;