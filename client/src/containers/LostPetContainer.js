import React, { Component } from 'react';
import LostPets from '../components/lostPets/LostPets';
import { connect } from 'react-redux';
import { getLostPets } from '../actions/LostPets';

class LostPetContainer extends Component {
  componentDidMount(){
    this.props.getLostPets();
  }

  render(){
    return (
      <div>
        <h1>Lost Pets</h1>
        <LostPets lostPets={this.props.lostPets}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    lostPets: state.lostPets
  })
}

const mapDispatchToProps = (dispatch) => {
  return{
    getLostPets: () => {dispatch(getLostPets())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LostPetContainer);