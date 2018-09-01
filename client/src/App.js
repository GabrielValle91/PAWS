import React, { Component } from 'react';
import './App.css';
import FoundPetContainer from './containers/FoundPetContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoundPetInput from './components/foundPets/FoundPetInput';
import NavBar from './containers/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/foundpets" component={FoundPetContainer} />
          <Route exact path="/foundpetsnew" component={FoundPetInput} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
