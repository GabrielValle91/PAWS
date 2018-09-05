import React, { Component } from 'react';
import './App.css';
import FoundPetContainer from './containers/FoundPetContainer';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import FoundPetInput from './components/foundPets/FoundPetInput';
import LostPetContainer from './containers/LostPetContainer';
import LostPetInput from './components/lostPets/LostPetInput';
import NavBar from './containers/NavBar';
import LogIn from './containers/LogIn';
import SignUp from './containers/SignUp';
import Logout from './containers/Logout';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/login" render={()=> (this.props.userDetails.id ? <Redirect to="/"/> : <LogIn/>)} />
          <Route exact path="/signup" render={()=> (this.props.userDetails.id ? <Redirect to="/"/> : <SignUp/>)} />
          <Route exact path="/logout" render={()=> (this.props.userDetails.id ? <Logout/> : <Redirect to="/login"/>)} />
          <Route exact path="/foundpets"  render={() => (this.props.userDetails.id ? <FoundPetContainer/> : <Redirect to="/login" />)} />
          <Route exact path="/foundpetsnew" render={() => (this.props.userDetails.id ? <FoundPetInput/> : <Redirect to="/login" />)} />
          <Route exact path="/lostpets" render={() => (this.props.userDetails.id ? <LostPetContainer/> : <Redirect to="/login" />)} />
          <Route exact path="/lostpetsnew" render={() => (this.props.userDetails.id ? <LostPetInput/> : <Redirect to="/login" />)} />
          
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return({
    userDetails: state.userAuthentication
  })
}

export default connect(mapStateToProps)(App);
