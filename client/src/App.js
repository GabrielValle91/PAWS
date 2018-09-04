import React, { Component } from 'react';
import './App.css';
import FoundPetContainer from './containers/FoundPetContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoundPetInput from './components/foundPets/FoundPetInput';
import LostPetContainer from './containers/LostPetContainer';
import LostPetInput from './components/lostPets/LostPetInput';
import NavBar from './containers/NavBar';
import LogIn from './containers/LogIn';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/foundpets" component={FoundPetContainer} />
          <Route exact path="/foundpetsnew" component={FoundPetInput} />
          <Route exact path="/lostpets" component={LostPetContainer} />
          <Route exact path="/lostpetsnew" component={LostPetInput} />
          <Route exact path="/login" component={LogIn} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
