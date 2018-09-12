import React, { Component } from 'react';
import FoundPetComments from './FoundPetComments'
import './FoundPets.css'

class FoundPet extends Component {
  constructor () {
    super();
    this.state = {
      isActive: false,
      likes: 0
    }
  }

  handleButtonClick = () => {
    this.setState({
      likes: ++this.state.likes
    })
  }
  
  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render (){
    const {foundPet} = this.props;
    
    return(
      <div className={this.state.isActive ? "FoundPetDetail" : "FoundPet"}>
        <div className={this.state.isActive ? "FoundPetDetailCard" : "FoundPetCard"} onClick={this.handleClick}>
          <p className={this.state.isActive ? "FoundPetDetailContent" : "FoundPetCardContent"}>{foundPet.gender} - {foundPet.animal_type}</p>
          <img src={foundPet.image_url} alt={"pet pic"} className={this.state.isActive ? "FoundPetDetailImage" : "FoundPetImage"}/>
          <p className={this.state.isActive ? "FoundPetDetailContent" : "FoundPetCardContent"}>Location: {foundPet.city}, {foundPet.state}</p>
          {this.state.isActive && <p className="FoundPetDetailContent">{foundPet.area}</p>}
        </div>
        <button onClick={this.handleButtonClick}>Likes: {this.state.likes}</button>
        {this.state.isActive && <div className="FoundPetCommentCard">
          <FoundPetComments petId={foundPet.id}/>
        </div>}
      </div>
    )
  }
}

export default FoundPet;