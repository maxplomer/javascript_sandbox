class Api::CurrentUsersController < ApplicationController
  def show
    signed_in? ? (render 'current_user') : (render json: nil)
  end
end
