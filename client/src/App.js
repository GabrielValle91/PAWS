import React, { Component } from 'react';
import './App.css';
import FoundPet from './containers/FoundPet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoundPet />
      </div>
    );
  }
}

export default App;
