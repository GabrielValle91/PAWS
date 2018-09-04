class Api::FoundPetCommentsController < ApplicationController

  def create
      comment = FoundPetComment.new(found_pet_comment_params)
      if comment.save
          render json: comment
      else
          render json: {message: comment.errors}, status: 400
      end
  end

  def destroy
    
  end

  private

  def found_pet_comment_params
      params.require(:found_pet_comment).permit(:user_id, :comment, :found_pet_id)
  end
end