import React from 'react';
import StateDemo from './StateDemo';
import HooksDemo from './HooksDemo';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Goodreads Demo</h1>
      <p><a href="https://github.com/briankoser/react-goodreads-demo">https://github.com/briankoser/react-goodreads-demo</a></p>
      <StateDemo />
      <HooksDemo />
    </div>
  );
}

export default App;
