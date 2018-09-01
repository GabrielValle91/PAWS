import React, { Component } from 'react';
import FoundPets from '../components/foundPets/FoundPets';
import { connect } from 'react-redux';
import { getFoundPets } from '../actions/FoundPets';

class FoundPetContainer extends Component {
  componentDidMount(){
    this.props.getFoundPets();
  }

  render(){
    return (
      <div>
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