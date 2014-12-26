class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.save!
    sign_in(@user)
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
