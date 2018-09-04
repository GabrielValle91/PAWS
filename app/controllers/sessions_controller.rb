class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:userDetails][:username])
    if @user && @user.authenticate(params[:userDetails][:password])
      render json: @user, status: 200
    else
      render json: {message: "Unable to login with that username and password combination"}, status: 400
    end
  end

  def signup
    @user = User.find_by(username: params[:userDetails][:username])
    @user2 = User.find_by(email: params[:userDetails][:email])
    if @user || @user2
      render json: {message: "That username or email is already in use"}, status: 400
    else
      user = User.new(user_params)
      if user.save
        render json: user, status: 200
      else
        render json: {message: "Something went wrong, please try again"}, status: 400
      end
    end
  end

  private

  def user_params
    params.require(:userDetails).permit(:username, :password, :email)
  end
end
