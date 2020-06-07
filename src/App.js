import React, { Component } from 'react';
import Add from './components/Add';
import Subtract from './components/Subtract';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Add />
          <Subtract />
        </header>
      </div>
    );
  }
}

export default App;
