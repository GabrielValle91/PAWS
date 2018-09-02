import React, { Component } from 'react';
import FoundPetComments from './FoundPetComments'
import './FoundPets.css'

class FoundPet extends Component {
  constructor () {
    super();
    this.state = {
      isActive: false
    }
  }
  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render (){
    const {foundPet} = this.props;
    
    return(
      <div className={this.state.isActive ? "FoundPetDetailCard" : "FoundPetCard"} onClick={this.handleClick}>
        <p className={this.state.isActive ? "FoundPetDetailContent" : "FoundPetCardContent"}>{foundPet.gender} - {foundPet.animal_type}</p>
        <img src={foundPet.image_url} alt={"pet pic"} className={this.state.isActive ? "FoundPetDetailImage" : "FoundPetImage"}/>
        <p className={this.state.isActive ? "FoundPetDetailContent" : "FoundPetCardContent"}>Location: {foundPet.city}, {foundPet.state}</p>
        {this.state.isActive && <p className="FoundPetDetailContent">{foundPet.area}</p>}
        {this.state.isActive && <FoundPetComments comments={foundPet.found_pet_comments}/>}
      </div>
    )
  }
}

export default FoundPet;