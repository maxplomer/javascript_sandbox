class StaticController < ApplicationController
    
  def backbone
  	render :backbone, :layout => false
  end

end
