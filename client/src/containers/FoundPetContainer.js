import React, { Component } from 'react';
import FoundPets from '../components/foundPets/FoundPets';
import FoundPetInput from '../components/foundPets/FoundPetInput';

class FoundPetContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      foundPets: [],
      lostPets: []
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3001/api/found_pets')
    .then(response => response.json())
    .then(foundPets => this.setState({foundPets}))
  }

  render(){
    return (
      <div>
        <FoundPetInput />
        <h1>Found Pets</h1>
        <FoundPets foundPets={this.state.foundPets}/>
      </div>
    )
  }
}

export default FoundPetContainer;