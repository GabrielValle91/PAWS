import React, { Component } from 'react';

class FoundPetComments extends Component {
  handleSubmit = event => {
    event.preventDefault();
  }

  render(){
    const {comments} = this.props;
    const commentList = comments.map(comment => {
      return(
        <p>{comment.user.username} says: {comment.comment}</p>
      )
    })
    return(
      <div>
        {commentList}
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    )
  }
}

export default FoundPetComments;