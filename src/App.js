import React from 'react';
import HooksDemo from './HooksDemo';
import ReduxDemo from './redux/ReduxDemo';
import StateDemo from './StateDemo';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Goodreads Demo</h1>
      <p><a href="https://github.com/briankoser/react-goodreads-demo">https://github.com/briankoser/react-goodreads-demo</a></p>
      <StateDemo />
      <ReduxDemo />
      <HooksDemo />
    </div>
  );
}

export default App;
