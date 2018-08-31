import React, { Component } from 'react';
import FoundPets from '../components/foundPets/FoundPets';
import FoundPetInput from '../components/foundPets/FoundPetInput';
import { connect } from 'react-redux';
import { getFoundPets } from '../actions/FoundPets';

class FoundPetContainer extends Component {
  // constructor(props){
  //   super(props)

  //   this.state = {
  //     foundPets: [],
  //     lostPets: []
  //   }
  // }
  
  componentDidMount(){
    this.props.getFoundPets();
  }

  render(){
    return (
      <div>
        <FoundPetInput />
        <h1>Found Pets</h1>
        <FoundPets foundPets={this.props.foundPets}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    foundPets: state.foundPets
  })
}

const mapDispatchToProps = (dispatch) => {
  return{
    getFoundPets: () => {dispatch(getFoundPets())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundPetContainer);