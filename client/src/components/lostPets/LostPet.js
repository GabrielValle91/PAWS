import React, { Component } from 'react';
import LostPetComments from './LostPetComments'
import './LostPets.css';

class LostPet extends Component {
  constructor(){
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

  render(){
    const {lostPet} = this.props;

    return (
      <div className={this.state.isActive ? "LostPetDetail" : "LostPet"}>
        <div className={this.state.isActive ? "LostPetDetailCard": "LostPetCard"} onClick={this.handleClick}>
          <p className={this.state.isActive ? "LostPetDetailContent": "LostPetCardContent"}>{lostPet.name} - {lostPet.gender} - {lostPet.animal_type}</p>
          <img src={lostPet.image_url} alt={"pet pic"} className={this.state.isActive ? "LostPetDetailImage" : "LostPetImage"} />
          <p className={this.state.isActive ? "LostPetDetailContent" : "LostPetCardContent"}>Location: {lostPet.city}, {lostPet.state}</p>
          {this.state.isActive && <p className="LostPetDetailContent">{lostPet.personality} - Chipped:{lostPet.chipped}</p>}
        </div>
        {this.state.isActive && <div className="LostPetCommentCard">
          <LostPetComments petId={lostPet.id}/>
        </div>}
      </div>
    )
  }
}

export default LostPet;