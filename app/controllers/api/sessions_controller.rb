class Api::SessionsController < ApplicationController
 def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render json: {'status' => 'ok'}
    else
      render json: {'error' => 'invalid username/password combo'}, status: :unprocessable_entity
    end
  end

  def destroy
    logout!
    render json: {'status' => 'successfully logged out'}, status: :ok
  end
end
