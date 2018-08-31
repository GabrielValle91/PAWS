import React, { Component } from 'react';
import './App.css';
import FoundPetContainer from './containers/FoundPetContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoundPetContainer />
      </div>
    );
  }
}

export default App;
