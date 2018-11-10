import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Counter count={10} initialCount={10} />
      </div>
    );
  }
}

export default App;
