class Api::CurrentUserFiddlesController < ApplicationController
  def show
    signed_in? ? (render 'current_user_fiddles') : (render json: nil)
  end
end
