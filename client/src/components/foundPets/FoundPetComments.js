import React, { Component } from 'react';

class FoundPetComments extends Component {
  render(){
    const {comments} = this.props;
    const commentList = comments.map(comment => {
      return(
        <p>{comment.comment}</p>
      )
    })
    return(
      <div>
        <p>In comments component</p>
        {commentList}
      </div>
    )
  }
}

export default FoundPetComments;