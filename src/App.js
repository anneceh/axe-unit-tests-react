import React, { Component } from 'react';
import Add from './components/Add';
import Subtract from './components/Subtract';
import Link from './components/Link';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Add />
          <Subtract />
          <Link />
        </header>
      </div>
    );
  }
}

export default App;
