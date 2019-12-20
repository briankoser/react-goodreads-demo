import React from 'react';
import Search from './Search';
import User from './User';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Goodreads Demo</h1>
      <p><a href="https://github.com/briankoser/react-goodreads-demo">https://github.com/briankoser/react-goodreads-demo</a></p>
      <Search />
      <User />
    </div>
  );
}

export default App;
