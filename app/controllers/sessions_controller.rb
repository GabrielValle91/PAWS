class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:userDetails][:username])
    if @user && @user.authenticate(params[:userDetails][:password])
      render json: @user, status: 200
    else
      render json: {message: "Unable to login with that username and password combination"}, status: 400
    end
  end
end
