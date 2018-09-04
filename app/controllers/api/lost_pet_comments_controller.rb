class Api::LostPetCommentsController < ApplicationController

  def create
      comment = LostPetComment.new(lost_pet_comment_params)
      if comment.save
          render json: comment
      else
          render json: {message: comment.errors}, status: 400
      end
  end

  def destroy
    
  end

  private

  def lost_pet_comment_params
      params.require(:lost_pet_comment).permit(:user_id, :comment, :lost_pet_id)
  end
end