class Api::FiddlesController < ApplicationController

  def show
    @fiddle = Fiddle.find(params[:id])
    render json: @fiddle
  end

  def index
    @fiddles = Fiddle.all
    render json: @fiddles
  end

  def create
    @fiddle = Fiddle.new(
      user_id: current_user.id,
      method_string: params["method_string"]
    )

    if @fiddle.save
      render json: @fiddle
    else
      render :json => @fiddle.errors, :status => :unprocessable_entity
    end
  end

end
